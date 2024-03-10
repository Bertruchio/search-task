import { useState, useContext, FormEvent } from "react";
import { SearchContext } from "../SearchResults/SearchContext";
import { User } from "../types";

import "./styles.css";

export function SearchForm() {
  const [searchQuery, setSearchQuery] = useState("");
  const { setSearchResults } = useContext(SearchContext);

  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `https://dummyjson.com/users/search?q=${searchQuery}`
      );
      const data = await response.json();

      if (data.users && Array.isArray(data.users)) {
        setSearchResults(data.users as User[]);
      } else {
        console.error(
          "API response does not contain a valid array of users:",
          data
        );
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="searchForm">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </form>
    </div>
  );
}
