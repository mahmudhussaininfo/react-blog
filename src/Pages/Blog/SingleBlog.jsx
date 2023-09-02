import React from "react";
import { useParams } from "react-router-dom";
import articles from "../../components/Articles/Article";
import MamuArticle from "../../components/mamuArticle/MamuArticle";
import Error from "../Error/Error";

const SingleBlog = () => {
  const { name } = useParams();
  const article = articles.find((data) => data.name === name);
  if (!article) {
    return <Error />;
  }
  const otherArticle = articles.filter((data) => data.name !== name);

  return (
    <>
      <div className="max-w-screen-lg sm:mx-auto mx-3 py-10">
        <h1 className="font-semibold sm:text-5xl text-3xl mb-10">
          {article.title}
        </h1>
        <img className="mb-5" src={article.images} alt="" />
        <p>{article.content1}</p> <br />
        <p>{article.content2}</p> <br />
        <p>{article.content3}</p> <br />
        <p>{article.content4}</p> <br />
        <h1>Other Blogs</h1>
        <MamuArticle article={otherArticle} />
      </div>
    </>
  );
};

export default SingleBlog;
