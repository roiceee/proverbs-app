import { Link } from "react-router-dom";
import VerseDiv from "./verse-div";

function ChapterPage() {
  const sampleChapter = {
    chapter: 1,
    verses: [
      {
        verse: 1,
        text: "The proverbs of Solomon, son of David, king of Israel:",
        keywords: ["proverbs", "Solomon", "David", "king", "Israel"],
      },
      {
        verse: 2,
        text: "To know wisdom and instruction, to understand words of insight,",
        keywords: ["wisdom", "instruction", "words", "insight"],
      },
      {
        verse: 3,
        text: "to receive instruction in wise dealing, in righteousness, justice, and equity;",
        keywords: [
          "instruction",
          "wise dealing",
          "righteousness",
          "justice",
          "equity",
        ],
      },
      {
        verse: 4,
        text: "to give prudence to the simple, knowledge and discretion to the youth—",
        keywords: ["prudence", "simple", "knowledge", "discretion", "youth"],
      },
      {
        verse: 5,
        text: "Let the wise hear and increase in learning, and the one who understands obtain guidance,",
        keywords: ["wise", "learning", "understands", "guidance"],
      },
    ],
  };

  return (
    <div className="mt-14 px-2 container mx-auto">
      <section>
        <h1 className="text-4xl font-bold text-center mb-4">
          Proverbs {sampleChapter.chapter}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sampleChapter.verses.map((verse) => (
            <VerseDiv
              chapter={sampleChapter.chapter}
              verse={verse.verse}
              text={verse.text}
              keywords={verse.keywords}
            />
          ))}
        </div>

        <hr className="mt-6" />
        <div className="flex flex-wrap-reverse gap-3 justify-between mt-4">
          <Link to={"/app"}>
            <button className="btn btn-outline btn-neutral">
              Back to Menu
            </button>
          </Link>
          <div className="flex flex-row flex-wrap gap-3">
            <button className="btn btn-outline btn-primary">
              Previous Chapter
            </button>
            <button className="btn btn-outline btn-primary">
              Next Chapter
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ChapterPage;
