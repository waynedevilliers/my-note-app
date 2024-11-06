const NoteCard = ({ note }) => {
    return (
      <div 
        className="relative bg-cover bg-center rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
        style={{
          backgroundImage: `url('https://cdn.pixabay.com/photo/2013/07/12/13/56/note-147603_640.png')`, // Image as background
        }}
      >
        {/* Overlay to darken the image and make text readable */}
        <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg"></div>
        
        {/* Content on top of the image */}
        <div className="relative z-10 p-6 text-white">
          {/* Note title */}
          <h3 className="text-2xl font-bold mb-2">{note.title}</h3>
  
          {/* Note Date */}
          <p className="text-sm mb-4">{note.date}</p>
  
          {/* Tags (optional) */}
          <div className="flex gap-2">
            {note.tags.map((tag, index) => (
              <span key={index} className="text-xs bg-accent text-white px-2 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default NoteCard;
  
  
  
  