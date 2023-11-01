import { Models } from "appwrite";
import React from "react";
type IPostCard = {
  post: Models.Document;
};
const PostCard = ({ post }: IPostCard) => {
  return <div>PostCard</div>;
};

export default PostCard;
