import { useState } from "react";

function SearchBar() {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <div className=" mt-10">
      <div className="label">
        <span className="label-text">Search Proverbs</span>
      </div>
      <div className="join w-full">
        <input
          value={searchText}
          onChange={handleSearch}
          type="text"
          placeholder={`Enter text or keyword`}
          className="input input-bordered rounded-r-none join-item w-full"
        />

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
