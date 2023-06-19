import React from "react";

type Tweet = {
  id: string;
  content: string;
  createdAt: Date;
  likeCount: number;
  likedByMe: boolean;
  user: {
    id: string;
    image: string | null;
    name: string | null;
  };
};

interface TweetProps {
  tweets: Tweet[] | undefined;
  isLoading: boolean;
  isError: boolean;
  hasMore: boolean | undefined;
  fetchNextTweets: () => Promise<unknown>;
}

const InfiniteTweetList: React.FC<TweetProps> = ({ tweets, isLoading, isError, hasMore, fetchNextTweets }) => {
  if (isLoading) return <h1>Loading...</h1>
  if (isError) return <h1>Error!</h1>
  if (tweets == null || tweets?.length == 0) return <h1>No Tweets</h1>
  
  return <div>InfiniteTweetList</div>;
};

export default InfiniteTweetList;
