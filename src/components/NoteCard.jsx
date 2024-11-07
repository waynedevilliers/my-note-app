const NoteCard = ({ note }) => {
  return (
    <div 
      className="relative bg-cover bg-center rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
      style={{
        backgroundImage: `url('https://cdn.pixabay.com/photo/2013/07/12/13/56/note-147603_640.png')`,
      }}
    >
      <div className="absolute inset-0 bg-stone-900 bg-opacity-60 rounded-lg"></div>
      
      <div className="relative z-10 p-6 text-stone-100">
        <h3 className="text-2xl font-bold mb-2">{note.title}</h3>

        <p className="text-sm mb-4">{note.date}</p>

        <div className="flex gap-2">
          {note.tags.map((tag, index) => (
            <span key={index} className="text-xs bg-stone-600 text-stone-100 px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NoteCard;

  
  
  
  