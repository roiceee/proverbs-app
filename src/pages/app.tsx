import { Helmet } from "react-helmet";
import SearchBar from "../components/application/search-bar";
import ChapterList from "../components/application/chapter-list";

function Application() {
  return (
    <>
      <Helmet>
        <title>Proverbs App | Application</title>
      </Helmet>
      <div className="container px-2 mt-24">
        <section className="prose-sm md:prose-lg">
          <h1 className=" text-center">Book of Proverbs</h1>
        </section>

        <section>
          <SearchBar />
        </section>

        <section>
          <ChapterList/>
        </section>
      </div>
    </>
  );
}

export default Application;
