import NoteCard from './NoteCard';
import { useEffect, useState } from 'react';
import { setLocalStorage, getLocalStorage } from '../utils/storage';
import savedNotes from '../data/notes';

const NotePageContainer = () => {
  const [notes, setNotes] = useState([]);
  const [searchQuery, setSearchQuery] = useState(''); // New state for search query

  // Load notes from localStorage or use saved notes
  useEffect(() => {
    const storedNotes = getLocalStorage('notes');
    if (storedNotes && Array.isArray(storedNotes)) {
      setNotes(storedNotes);
    } else {
      setLocalStorage('notes', savedNotes);
      setNotes(savedNotes);
    }
  }, []);

  // Filter notes based on search query
  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    note.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
    note.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value); // Update search query on input change
  };

  const handleClick = () => {
    console.log('clicked');
  };

  return (
    <section className="bg-stone-300 min-h-screen min-w-screen p-8">
      <h2 className="text-3xl font-bold text-stone-600 text-center mb-5 hover:underline">My Notes</h2>

      {/* Search Bar */}
      <div className="mb-6 max-w-md mx-auto">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search notes..."
          className="w-full p-3 border border-stone-500 bg-stone-500 text-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition"
        />
      </div>

      <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredNotes.length === 0 ? (
          <div className="col-span-full text-center text-stone-500">
            No notes match your search.
          </div>
        ) : (
          filteredNotes.map((note) => (
            <NoteCard onClick={handleClick} key={note.id} note={note} />
          ))
        )}
      </div>
    </section>
  );
};

export default NotePageContainer;












