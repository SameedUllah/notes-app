import AddNote from './AddNote';
import Note from './Note';
import Search from './Search';


const notesList = () => {
	return (
		<div className='notes-list'>
            <Search/>
            <Note/>
            <Note/>
            <Note/>
            <Note/>
            <AddNote/>

		</div>
	);
};

export default notesList;