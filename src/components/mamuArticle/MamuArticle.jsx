import React from "react";
import { Link } from "react-router-dom";

const MamuArticle = ({ article }) => {
  return (
    <>
      <div className="max-w-screen-lg sm:mx-auto py-10">
        <div className="sm:grid sm:grid-cols-3 sm:gap-4">
          {article.map((item) => {
            return (
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden mt-5">
                <Link to={`/blog/${item.name}`}>
                  <img
                    className="w-full sm:h-60 object-cover object-center"
                    src={item.images}
                    alt=""
                  />
                </Link>
                <Link to={`/blog/${item.name}`}>
                  {" "}
                  <h2 className="p-5 font-semibold">{item.title}</h2>
                </Link>
                <p className="px-5 pb-5">
                  {" "}
                  {item.content1[0].substring(0, 70)}{" "}
                </p>
                <Link to={`/blog/${item.name}`}>
                  <button className="bg-sky-950 ml-5 mb-5 py-2 px-5 text-white">
                    More
                  </button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MamuArticle;
