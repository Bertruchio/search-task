import { useState } from "react";
import { SearchForm } from "./components/SearchFrom/SearchForm";
import { SearchContext } from "./components/SearchResults/SearchContext";
import { SearchResults } from "./components/SearchResults/SearchResults";
import { User } from "../src/components/types";

export default function App() {
  const [searchResults, setSearchResults] = useState<User[]>([]);

  return (
    <SearchContext.Provider value={{ searchResults, setSearchResults }}>
      <SearchForm />
      <SearchResults />
    </SearchContext.Provider>
  );
}
