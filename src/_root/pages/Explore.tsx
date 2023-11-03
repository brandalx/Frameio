import { Input } from "@/components/ui/input";
import React from "react";

const Explore = () => {
  return (
    <div className="explore-container">
      <div className="explore-inner_container">
        <h2 className="h3-bold md:h2-bold w-full"> Search Posts</h2>
        <div className="flex gap-1 px-4 w-full rounded-lg bg-dark-4">
          <img src="/assets/icons/search.svg" alt="Search" />
          <Input
            type="search"
            className="explore-search "
            placeholder="Search"
          />
        </div>
      </div>
    </div>
  );
};

export default Explore;
