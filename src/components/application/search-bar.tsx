import { useState } from "react";

function SearchBar() {
  const [searchType, setSearchType] = useState<"text" | "keyword">("text");

  return (
    <div className=" mt-10">
      <div className="join w-full">
        <input
          type="text"
          placeholder={`Enter ${searchType}`}
          className="input input-bordered rounded-r-none join-item w-full"
        />

        <select
          defaultValue={"text"}
          className="select select-bordered join-item"
          onChange={(e) => setSearchType(e.target.value as "text" | "keyword")}
        >
          <option value="text">Text</option>
          <option value="keyword">Keyword</option>
        </select>

        <button className="btn btn-accent rounded-l-none join-item">
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
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
