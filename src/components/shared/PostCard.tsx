import { useUserContext } from "@/context/AuthContext";
import { formatDate } from "@/lib/helpers/formatDate";
import { Models } from "appwrite";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "react-lazy-load-image-component/src/effects/blur.css";

import { Link } from "react-router-dom";
import PostStats from "./PostStats";
type IPostCard = {
  post: Models.Document;
};
const PostCard = ({ post }: IPostCard) => {
  const { user } = useUserContext();
  if (!post.creator) return;
  return (
    <div className="post-card">
      <div className="flex-between">
        <div className="flex items-center gap-3 ">
          <Link to={`/profile/${post.creator.$id}`}>
            <img
              src={
                post?.creator?.imageUrl ||
                "/assets/icons/profile-placeholder.svg"
              }
              alt="Creator"
              className="rounded-full w-12lg: h-12"
            />
          </Link>
          <div className="flex flex-col ">
            <p className="base-medium lg:body-bold text-light-1 ">
              {post.creator.name}
            </p>
            <div className="flex-center gap-2 text-light-3 ">
              <p className="subtle-semibold lg:small-regular">
                {formatDate(post.$createdAt)}
              </p>
              -
              <p className="subtle-semibold lg:small-regular">
                {post.location}
              </p>
            </div>
          </div>
        </div>
        {user.id === post.creator.$id ? (
          <Link
            className={`transition-all hover:opacity-75`}
            to={`/update-post/${post.$id}`}
          >
            <img
              src="/assets/icons/edit.svg"
              alt="edit"
              width={20}
              height={20}
            />
          </Link>
        ) : (
          <div></div>
        )}
      </div>
      <Link to={`/post/${post.$id}`}>
        <div className="small-medium lg:base-medium py-5">
          <p>{post.caption}</p>
          <ul className="flex gap-1 mt-2 ">
            {post.tags.map((tag: string) => (
              <li key={tag} className="text-light-3">
                #{tag}
              </li>
            ))}
          </ul>
        </div>

        <LazyLoadImage
          className="post-card_img"
          alt={`Lazy loaded image`}
          src={post.imageUrl || "/assets/icons/profile-placeholder.svg"}
          effect="blur"
        />
      </Link>
      <PostStats post={post} userId={user.id} />
    </div>
  );
};

export default PostCard;
