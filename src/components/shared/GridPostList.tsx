import { useUserContext } from "@/context/AuthContext";
import { Models } from "appwrite";
import React, { useEffect } from "react";

type GridPostListProps = {
  posts: Models.Document[];
};

const GridPostList = ({ posts }: GridPostListProps) => {
  const { user } = useUserContext();
  //   useEffect(() => {
  //     console.log(posts);
  //   }, [posts]);
  return (
    <ul className="grid-container">
      {posts.map((post) => (
        <li key={post.caption}>{post.caption}</li>
      ))}
    </ul>
  );
};

export default GridPostList;
