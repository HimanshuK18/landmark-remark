import React from "react";

interface SearchComponentProps {
  onSearch: (searchText: string) => void;
}

const SearchComponent: React.FC<SearchComponentProps> = ({ onSearch }) => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchText = e.target.value;
    onSearch(searchText);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search notes..."
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchComponent;
