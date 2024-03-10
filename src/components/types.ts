export interface User {
  id: number;
  firstName: string;
  lastName: string;
  image: string;
  address: {
    city: string;
  };
}

export interface SearchContextProps {
  searchResults: User[];
  setSearchResults: React.Dispatch<React.SetStateAction<never[] | User[]>>;
}
