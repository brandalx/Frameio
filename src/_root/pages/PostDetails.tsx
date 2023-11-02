import Loader from "@/components/shared/Loader";
import { formatDate } from "@/lib/helpers/formatDate";
import { useGetPostById } from "@/lib/react-query/queriesAndMutations";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "react-lazy-load-image-component/src/effects/blur.css";

const PostDetails = () => {
  const { id } = useParams();

  const { data: post, isPending } = useGetPostById(id || "");
  console.log(post);
  return (
    <div className="post_details-container">
      {isPending ? (
        <Loader />
      ) : (
        <div className="post_details-img">
          <LazyLoadImage
            className="rounded-lg"
            alt={`Creator`}
            src={post?.imageUrl || "/assets/icons/profile-placeholder.svg"}
            effect="blur"
          />

          <div className="post_details-info">
            <div className="flex-between w-full">
              <Link
                className="flex items-center gap-3"
                to={`/profile/${post?.creator.$id}`}
              >
                <img
                  src={
                    post?.creator?.imageUrl ||
                    "/assets/icons/profile-placeholder.svg"
                  }
                  alt="Creator"
                  className="rounded-full w-12lg: h-12"
                />

                <div className="flex flex-col ">
                  <p className="base-medium lg:body-bold text-light-1 ">
                    {post?.creator.name}
                  </p>
                  <div className="flex-center gap-2 text-light-3 ">
                    <p className="subtle-semibold lg:small-regular">
                      {formatDate(post?.$createdAt || "")}
                    </p>
                    -
                    <p className="subtle-semibold lg:small-regular">
                      {post?.location}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostDetails;
