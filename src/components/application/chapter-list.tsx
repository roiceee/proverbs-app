function ChapterList() {
  const chapters = 31;

  const chapterButtons = () => {
    return (
      <div className="flex flex-wrap justify-center mt-8">
        {Array.from(Array(chapters).keys()).map((_, i) => (
          <div>
            <button key={i} className="btn btn-outline btn-lg rounded-btn m-1 w-16 h-16">
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
      <hr className="mb-0"/>
      {chapterButtons()}
    </div>
  );
}

export default ChapterList;
