import React, { useCallback, useLayoutEffect, useRef, useState } from "react";
import Button from "./Button";
import ProfileImage from "./ProfileImage";
import { useSession } from "next-auth/react";

function updateTextAreaSize(textArea?: HTMLAreaElement | null) {
  if (textArea == null) return;
  textArea.style.height = "0";
  textArea.style.height = `${textArea.scrollHeight}px`;
}

const NewTweetForm = () => {
  const session = useSession();
  if (session.status !== "authenticated") return

  return <Form />;
};

function Form() {
  const session = useSession()
  const [inputValue, setInputValue] = useState<string>("");
  const textAreaRef = useRef<HTMLAreaElement>();

  const inputRef = useCallback((textArea: HTMLAreaElement) => {
    updateTextAreaSize(textArea);
    textAreaRef.current = textArea;
  }, []);

  useLayoutEffect(() => {
    updateTextAreaSize(textAreaRef.current);
  }, [inputValue]);

  if (session.status !== "authenticated") return null

  return (
    <form className="flex flex-col gap-2 border-b px-4 py-2">
      <div className="flex gap-4">
        <ProfileImage src={session.data.user.image} />
        <textarea
          ref={inputRef}
          onChange={(e) => setInputValue(e.target.value)}
          style={{ height: 0 }}
          className="text-md flex-grow resize-none overflow-hidden p-4 outline-none"
          placeholder="What's Happening"
        />
      </div>
      <Button className="self-end">Tweet</Button>
    </form>
  );
}

export default NewTweetForm;
