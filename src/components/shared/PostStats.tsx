import { useUserContext } from "@/context/AuthContext";
import { checkIsLiked } from "@/lib/helpers/checkIsLiked";
import {
  useDeleteSavedPost,
  useLikePost,
  useSavePost,
} from "@/lib/react-query/queriesAndMutations";
import { Models } from "appwrite";
import React, { useState, useEffect } from "react";
type IPostStatsProps = {
  post: Models.Document;
  userId: string;
};
const PostStats = ({ post, userId }: IPostStatsProps) => {
  const likesList = post.likes.map((user: Models.Document) => user.$id);
  const [likes, setlikes] = useState(likesList);
  const [isSaved, setIsSaved] = useState(false);
  const { mutate: likePost } = useLikePost();
  const { mutate: savePost } = useSavePost();
  const { mutate: deleteSavePost } = useDeleteSavedPost();

  const { data: currentUser } = useUserContext();

  const handleLikePost = () => {};
  const handleSavePost = () => {};
  return (
    <div className="flex justify-between items-center z-20">
      <div className="flex gap-2 mr-5 ">
        <img
          src={
            checkIsLiked(likes, userId)
              ? "/assets/icons/liked.svg"
              : "/assets/icons/like.svg"
          }
          alt="like"
          width={20}
          height={20}
          onClick={() => {}}
          className="cursor-pointer"
        />
        <p className="small-medium lg:base-medium">0</p>
      </div>

      <div className="flex gap-2 mr-5 ">
        <img
          src="/assets/icons/save.svg"
          alt="like"
          width={20}
          height={20}
          onClick={() => {}}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default PostStats;
