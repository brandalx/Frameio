import { Models } from "appwrite";
import React from "react";
type IPostStatsProps = {
  post: Models.Document;
  userId: string;
};
const PostStats = ({ post, userId }: IPostStatsProps) => {
  return <div>PostStats</div>;
};

export default PostStats;
