import { useNavigate } from "react-router";
import data from "../../assets/proverbs.json";

function ChapterList() {
  const history = useNavigate();

  const handleClick = (chapterNumber: number) => {
    history("/app/" + chapterNumber);
  };

  const chapters = data.length;

  const chapterButtons = () => {
    return (
      <div className="flex flex-wrap justify-center mt-8">
        {Array.from(Array(chapters).keys()).map((_, i) => (
          <div key={"div-" + i}>
            <button
              onClick={() => handleClick(i + 1)}
              key={"but-" + i}
              className="btn btn-outline btn-lg rounded-btn m-1 w-16 h-16"
            >
              {i + 1}
            </button>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="mt-8">
      <div className="prose">
        <h3>Select Chapter</h3>
      </div>
      <hr className="mb-0" />
      {chapterButtons()}
    </div>
  );
}

export default ChapterList;
