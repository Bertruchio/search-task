import { useContext } from "react";
import { SearchContext } from "./SearchContext";
import { UserCard } from "../UserCard/UserCard";

import "./style.css";

export function SearchResults() {
  const { searchResults } = useContext(SearchContext);

  return (
    <div className="usersList">
      {searchResults.map((user) => (
        <UserCard key={user.id} {...user} />
      ))}
    </div>
  );
}
