import { Link, useSearchParams } from "react-router-dom";
import SearchBar from "../../components/application/search-bar";
import data from "../../assets/proverbs.json";
import { useState } from "react";

type SearchResultType = {
  chapter: number;
  verse: number;
  text: string;
  keywords: string;
};

function SearchPage() {
  const [searchParams] = useSearchParams();

  const [searchMode, setSearchMode] = useState<"text" | "keyword">("text");

  const search = searchParams.get("q");

  if (!search) {
    return <div></div>;
  }

  const handleSearchMode = (mode: "text" | "keyword") => {
    setSearchMode(mode);
  };

  const results = (): SearchResultType[] | undefined => {
    const searchResult: SearchResultType[] = [];

    if (searchMode === "text") {
      data.forEach((chapter) => {
        const chapterNumber = parseInt(chapter.chapter);

        const verses = chapter.verses.filter((verse) => {
          return verse.text.toLowerCase().includes(search.toLowerCase());
        });

        verses.forEach((verse) => {
          searchResult.push({
            chapter: chapterNumber,
            verse: parseInt(verse.verse),
            text: verse.text,
            keywords: verse.keywords,
          });
        });
      });
    } else {
      data.forEach((chapter) => {
        const chapterNumber = parseInt(chapter.chapter);

        const verses = chapter.verses.filter((verse) => {
          return verse.keywords.toLowerCase().includes(search.toLowerCase());
        });

        verses.forEach((verse) => {
          searchResult.push({
            chapter: chapterNumber,
            verse: parseInt(verse.verse),
            text: verse.text,
            keywords: verse.keywords,
          });
        });
      });
    }
    return searchResult;
  };

  const res = results();

  return (
    <div>
      <div>
        <Link to={"/app"}>
          <button className="btn btn-outline btn-neutral btn-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </button>
        </Link>
      </div>

      <div className="mt-2">
        <SearchBar />
      </div>

      <div className="mt-6">
        <h2>
          Results for: <b>{`${search} (${res?.length} results)`}</b>
        </h2>
      </div>

      <div className="mt-6">
        <div role="tablist" className="tabs tabs-bordered">
          <a
            role="tab"
            className={`tab ${searchMode === "text" ? "tab-active" : ""}`}
            onClick={() => handleSearchMode("text")}
          >
            By Text
          </a>
          <a
            role="tab"
            className={`tab ${searchMode === "keyword" ? "tab-active" : ""}`}
            onClick={() => handleSearchMode("keyword")}
          >
            By Keyword
          </a>
        </div>
      </div>

      <div className="mt-6">
        {res?.map((result, index) => {
          return (
            <div key={index} className=" py-4 border-b ">
              <div className="flex flex-row justify-between">
                <h3>
                  <span className="text-sm font-bold">
                    Proverbs {result.chapter}:{result.verse}
                  </span>
                </h3>

                <Link
                  to={`/app/chapter/${result.chapter}`}
                  className="btn btn-outline btn-neutral btn-sm"
                >
                  <span className="text-sm font-bold">Open Chapter</span>
                </Link>
              </div>

              <div className="mt-2">
                <p className="text-sm">{result.text}</p>
              </div>

              <div>
                <p className="text-sm text-neutral-500">
                  <b>Keywords: </b>
                  {result.keywords}
                </p>
              </div>
            </div>
          );
        })}
        {results()?.length === 0 && (
          <div className="mt-6">
            <h2>No results found.</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchPage;
