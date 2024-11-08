import NoteCard from './NoteCard';
import { useEffect, useState } from 'react';
import { setLocalStorage, getLocalStorage } from '../utils/storage';
import savedNotes from '../data/notes';

const NoteCardContainer = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    // Check if notes already exist in localStorage
    const storedNotes = getLocalStorage('notes');

    if (storedNotes && Array.isArray(storedNotes)) {
      // Use notes from localStorage if available
      setNotes(storedNotes);
    } else {
      // Save default savedNotes to localStorage if no notes exist
      setLocalStorage('notes', savedNotes);
      setNotes(savedNotes);
    }
  }, []); // Empty dependency array ensures this effect runs only once

  // Filter notes to only include those with the "Important" tag
  const importantNotes = notes.filter(note => note.tags && note.tags.includes('important'));


  // Function to add a new note and update localStorage
  const addNote = (newNote) => {
    // Update the notes state by adding the new note
    const updatedNotes = [...notes, newNote];
    setNotes(updatedNotes); // Update state

    // Save the updated notes to localStorage
    setLocalStorage('notes', updatedNotes); // Persist in localStorage
  };

  return (
    <section className="bg-stone-300 min-h-full min-w-screen">
      <h2 className="text-3xl font-bold text-stone-600 text-center mb-5 text-decoration-3 hover:underline">Important Notes</h2>
      <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {notes.length === 0 ? (
          <div className="col-span-full text-center text-stone-500">
            No notes available.
          </div>
        ) : (
          importantNotes.slice(-4).map((note) => (
            <NoteCard key={note.id} note={note} />
          ))
        )}
      </div>
    </section>
  );
};

export default NoteCardContainer;











