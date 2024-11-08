import { useNavigate } from "react-router-dom";

const NoteCard = ({ note }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/noteDetails/${note.id}`); // Pass the note ID in the URL
  };

  return (
    <div onClick={handleClick}
      className="relative bg-cover bg-center rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out h-60 flex flex-col justify-between overflow-hidden"
      style={{
        backgroundImage: `url('https://cdn.pixabay.com/photo/2013/07/12/13/56/note-147603_640.png')`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-stone-900 bg-opacity-60 rounded-lg"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 p-6 text-stone-100 flex flex-col justify-between h-full">
        {/* Title and Date at the Top */}
        <div>
          <p className="text-sm mb-4 justify-self-end">{note.date}</p>
          <br /><br />
          <h3 className="text-2xl font-semibold mb-2 flex-col justify-self-center">{note.title}</h3>
        </div>

        {/* Tags at the Bottom */}
        <div className="flex gap-2 mt-auto">
          {note.tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs bg-stone-600 text-stone-100 px-3 py-1 rounded-full hover:bg-stone-500 transition-all duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NoteCard;





  
  
  
  