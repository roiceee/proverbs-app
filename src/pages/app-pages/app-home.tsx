import ChapterList from "../../components/application/chapter-list";
import SearchBar from "../../components/application/search-bar";
import Quotes from "../../components/quotes";

function AppHome() {
  return (
    <>
      <section>
        <SearchBar />
      </section>
      <section className="prose-sm md:prose-lg">
        <Quotes
          quoteClassName="text-center text-lg"
          verseClassName="text-center text-md"
        />
      </section>
      <section>
        <ChapterList />
      </section>
    </>
  );
}

export default AppHome;
