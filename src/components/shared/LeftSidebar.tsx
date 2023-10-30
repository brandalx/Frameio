import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

import { useToast } from "../ui/use-toast";
import { useUserContext } from "@/context/AuthContext";
import { useSignOutAccount } from "@/lib/react-query/queriesAndMutations";
const LeftSidebar = () => {
  const { mutate: signOut, isSuccess } = useSignOutAccount();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user } = useUserContext();
  useEffect(() => {
    if (isSuccess) {
      navigate(0);

      toast({
        variant: "default",
        title: "Sign Out success",
        description: "See you soon at Frameio!",
      });
    }
  }, [isSuccess]);

  return (
    <nav className="leftsidebar">
      <div className="flex flex-col gap-11">
        <Link to="/" className="flex gap-3 items-center">
          <img
            src="/assets/images/logo.svg"
            alt="logo"
            width={170}
            height={36}
          />
        </Link>
        <Link
          to={`/profile/${user.id}`}
          className="flex gap-3 items-center hover:opacity-70 transition-all"
        >
          <img
            src={user.imageUrl || "/assets/icons/profile-placeholder.png"}
            alt="profile"
            className="h-14 rounded-full"
          />
          <div className="flex flex-col ">
            <p className="body-bold ">
              {user.name}
              <p className="small-regular text-light-3">@{user.username}</p>
            </p>
          </div>
        </Link>
        <ul className="flex flex-col gap-6"></ul>
      </div>
    </nav>
  );
};

export default LeftSidebar;
