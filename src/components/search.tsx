import React, { useState } from "react";

interface SearchResult {
  id: string;
  name: string;
}

export const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    // Call a function to update the search results based on the search value
    updateSearchResults(event.target.value);
  };

  const updateSearchResults = (searchValue: string) => {
    // Call an API or perform a search operation to get the search results
    // and update the searchResults state variable
    if (searchValue == "") {
      setSearchResults([]);
    } else {
      setSearchResults([
        { id: "1", name: "Result 1" },
        { id: "2", name: "Result 2" },
        { id: "3", name: searchValue },
      ]);
    }

  };

  return (
    <>
      <label className="relative block">
        <span className="sr-only">Search</span>
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </span>
        <input
          className="block w-full rounded-md border border-slate-300 bg-white px-10 py-2 shadow-sm placeholder:italic placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
          placeholder="Como se llama tu trabajo..."
          type="text"
          name="search"
          value={searchValue}
          onInput={handleSearchChange}
        />
      </label>
      {/* Render the search results */}
      <ul>
        {searchResults.map((result) => (
          <li key={result.id}>{result.name}</li>
        ))}
      </ul>
    </>
  )
}