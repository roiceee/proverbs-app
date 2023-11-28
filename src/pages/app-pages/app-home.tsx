import ChapterList from "../../components/application/chapter-list";
import Quotes from "../../components/quotes";

function AppHome() {
  return (
    <>
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
