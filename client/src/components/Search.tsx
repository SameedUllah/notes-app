import { MdSearch } from "react-icons/md";

export const Search = ({ handleSearchNote }: any): JSX.Element => {
    return (
		<div className='search'>
			<MdSearch className='search-icons' size='1.3em' />
			<input
				onChange={(event) =>
					handleSearchNote(event.target.value)
				}
				type='text'
				placeholder='type to search...'
			/>
		</div>
	);
};
