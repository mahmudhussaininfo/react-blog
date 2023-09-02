import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="bg-sky-950 py-6">
        <ul className="flex justify-center gap-7 uppercase text-white">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="https://mahmudhussain.netlify.app/" target="_blank">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
