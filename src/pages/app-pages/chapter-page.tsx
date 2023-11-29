import { useParams } from "react-router-dom";
import VerseDiv from "./verse-div";
import data from "../../assets/proverbs.json";
import NavButtons from "./nav-buttons";

import NotFoundDiv from "../../components/not-found-div";

function ChapterPage() {
  const { id } = useParams();

  if (!id) {
    return <div>Error Page</div>;
  }

  if (isNaN(parseInt(id)) || !data[parseInt(id) - 1]) {
    //make this a 404 page and have a link to the home page
    return (
      <div className="flex justify-center items-center my-56">
        <NotFoundDiv />
      </div>
    );
  }

  return (
    <div className="mt-8 px-2 container mx-auto">
      <section>
        <NavButtons
          id={id}
          disableNext={parseInt(id) === 31}
          disablePrev={parseInt(id) === 1}
        />
        <h1 className="mt-8 text-4xl font-bold text-center mb-4">
          Proverbs {id}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {data[parseInt(id) - 1].verses.map((verse) => (
            <VerseDiv
              key={"verse-" + verse.verse}
              chapter={parseInt(id)}
              verse={parseInt(verse.verse)}
              text={verse.text}
              keywords={verse.keywords}
            />
          ))}
        </div>

        <div className="mt-10">
          <NavButtons
            id={id}
            disableNext={parseInt(id) === 31}
            disablePrev={parseInt(id) === 1}
          />
        </div>
      </section>
    </div>
  );
}

export default ChapterPage;
