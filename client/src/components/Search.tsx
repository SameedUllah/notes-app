import { MdSearch } from "react-icons/md";

import { NoteProps } from "./Note";

interface SearchNoteProps
  extends Required<Pick<NoteProps, "handleSearchNote">> {}

export const Search = ({ handleSearchNote }: SearchNoteProps): JSX.Element => {
  return (
    <div className="search">
      <MdSearch className="search-icons" size="1.3em" />
      <input
        onChange={(event) => handleSearchNote(event.target.value)}
        type="text"
        placeholder="Type to search..."
      />
    </div>
  );
};
