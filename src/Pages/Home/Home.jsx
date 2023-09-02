import articles from "../../components/Articles/Article";
import MamuArticle from "../../components/mamuArticle/MamuArticle";

const Home = () => {
  return (
    <>
      <div className="max-w-screen-lg sm:mx-auto py-10">
        <h1 className="text-3xl font-bold">Blogs</h1>
        <MamuArticle article={articles} />
      </div>
    </>
  );
};

export default Home;
