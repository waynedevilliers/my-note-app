import NoteCard from './NoteCard';
import notes from '../data/notes';

const NoteCardContainer = () => {
  return (
    <section className="p-8 bg-stone-100 min-h-screen">
      <h2 className="text-3xl font-bold text-stone-600 text-center mb-10">My Notes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {notes.map((note) => (
          <NoteCard key={note.id} note={note} />
        ))}
      </div>
    </section>
  );
};

export default NoteCardContainer;

