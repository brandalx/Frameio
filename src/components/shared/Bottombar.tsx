import { bottombarLinks } from "@/constants";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Bottombar = () => {
  const { pathname } = useLocation();
  return (
    <section className="bottom-bar">
      {bottombarLinks.map((link) => {
        const isActive = pathname === link.route;
        return (
          <li
            className={`leftsidebar-link group transition-all ${
              isActive && "bg-primary-500"
            }`}
            key={link.label}
          >
            <Link to={link.route} className="flex gap-4 items-center p-4">
              <img
                src={link.imgURL}
                alt={link.label}
                className={`group-hover:invert-white ${
                  isActive && "invert-white"
                }`}
              />
              {link.label}
            </Link>
          </li>
        );
      })}
    </section>
  );
};

export default Bottombar;
