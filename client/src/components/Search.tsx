import { MdSearch } from "react-icons/md";

export const Search = ({ handleSearchNote }: any) => {
  return (
    <div className="search">
      <MdSearch className="search-icon">
        <input
          onChange={(event) => handleSearchNote(event.target.value)}
          type="text"
          placeholder="Type here to search"
        />
      </MdSearch>
    </div>
  );
};
