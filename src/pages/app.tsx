import { Helmet } from "react-helmet";
import SearchBar from "../components/application/search-bar";
import ChapterList from "../components/application/chapter-list";
import Quotes from "../components/quotes";

function Application() {
  return (
    <>
      <Helmet>
        <title>Proverbs App | Application</title>
      </Helmet>
      <div className="mt-24 px-2 max-w-3xl container mx-auto">
        <section className="prose-sm md:prose-lg">
          <h1 className=" text-center">Book of Proverbs</h1>
          <Quotes quoteClassName="text-center text-lg" verseClassName="text-center text-md"/>
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
