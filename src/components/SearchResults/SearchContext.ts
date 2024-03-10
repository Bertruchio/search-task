import { createContext } from "react";
import { SearchContextProps } from "../types";

export const SearchContext = createContext<SearchContextProps>({
  searchResults: [],
  setSearchResults: () => {},
});
