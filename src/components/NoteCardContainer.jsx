import NoteCard from './NoteCard';
import notes from '../data/notes'; // Import your notes data

const NoteCardContainer2 = () => {
  return (
    <section className="p-8 bg-base-100">
      <h2 className="text-3xl font-bold text-accent text-center mb-10">My Notes</h2>
      {/* Grid layout for the notes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {notes.map((note) => (
          <NoteCard key={note.id} note={note} />
        ))}
      </div>
    </section>
  );
};

export default NoteCardContainer2;
