import { useUserContext } from "@/context/AuthContext";
import { checkIsLiked } from "@/lib/helpers/checkIsLiked";
import {
  useDeleteSavedPost,
  useGetCurrentUser,
  useLikePost,
  useSavePost,
} from "@/lib/react-query/queriesAndMutations";
import { Models } from "appwrite";
import React, { useState, useEffect, useCallback } from "react";
import Loader from "./Loader";
type IPostStatsProps = {
  post: Models.Document;
  userId: string;
};
const PostStats = ({ post, userId }: IPostStatsProps) => {
  const likesList = post.likes.map((user: Models.Document) => user.$id);

  const [likes, setlikes] = useState(likesList);
  const [isSaved, setIsSaved] = useState(false);
  const { mutate: likePost } = useLikePost();
  const { mutate: savePost, isPending: isSavingPost } = useSavePost();
  const { mutate: deleteSavePost, isPending: isDeletingSaved } =
    useDeleteSavedPost();

  const { data: currentUser } = useGetCurrentUser();

  const savedPostRecord = currentUser?.save.find(
    (record: Models.Document) => record.post.$id === post.$id
  );

  useEffect(() => {
    setIsSaved(!!savedPostRecord);
  }, [currentUser, likes, savedPostRecord]);

  const handleLikePost = useCallback(
    (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
      e.stopPropagation();

      let likesArray = [...likes];

      if (likesArray.includes(userId)) {
        likesArray = likesArray.filter((Id) => Id !== userId);
      } else {
        likesArray.push(userId);
      }

      setlikes(likesArray);
      likePost({ postId: post.$id, likesArray });
    },
    [likes, userId, likePost, post.$id]
  );

  const handleSavePost = (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    e.stopPropagation();

    if (savedPostRecord) {
      setIsSaved(false);
      return deleteSavePost(savedPostRecord.$id);
    }

    savePost({ userId: userId, postId: post.$id });
    setIsSaved(true);
  };
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
          onClick={handleLikePost}
          className="cursor-pointer"
        />
        <p className="small-medium lg:base-medium">{likes.length}</p>
      </div>

      <div className="flex gap-2 mr-5 ">
        {isSavingPost || isDeletingSaved ? (
          <div style={{ width: 20, height: 20 }}>
            <Loader />
          </div>
        ) : (
          <img
            src={isSaved ? "/assets/icons/saved.svg" : "/assets/icons/save.svg"}
            alt="like"
            width={20}
            height={20}
            onClick={handleSavePost}
            className="cursor-pointer"
          />
        )}
      </div>
    </div>
  );
};

export default PostStats;
