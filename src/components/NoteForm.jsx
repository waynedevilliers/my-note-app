import { useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/storage";

const NoteForm = () => {
  const [tags, setTags] = useState('');
  const [{ title, date, content}, setNote] = useState({
    title: "",
    date: "",
    content: "",
    tags: [],
  });

  const handleChange = (e) => {
    setNote((note) => ({
      ...note,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !date || !content) {
      return;
    }

    // Format tags into an array
    const newNote = {
      title,
      date,
      content,
      tags: tags.split(",").map((tag) => tag.trim()),
    };

    // Get existing notes and append the new one
    const existingNotes = getLocalStorage("notes");
    existingNotes.push(newNote);

    // Save updated notes to localStorage
    setLocalStorage("notes", existingNotes);

    // Reset form fields after submission
    setNote({
      title: "",
      date: "",
      content: "",
      tags: [],
    });
  };

  
  
const handleTagChange = (e) => {
    setTags(e.target.value);
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      {/* Title */}
      <div>
        <label className="block text-stone-200 font-semibold mb-2">Title</label>
        <input
          type="text"
          placeholder="Add a title"
          name="title"
          value={title}
          onChange={handleChange}
          required
          className="w-full p-3 border border-stone-500 bg-stone-800 text-stone-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition"
        />
      </div>

      {/* Date */}
      <div>
        <label className="block text-stone-200 font-semibold mb-2">Date</label>
        <input
          type="date"
          name="date"
          value={date}
          onChange={handleChange}
          className="w-full p-3 border border-stone-500 bg-stone-800 text-stone-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition"
        />
      </div>

      {/* Content */}
      <div>
        <label className="block text-stone-200 font-semibold mb-2">Content</label>
        <textarea
          name="content"
          placeholder="Add your note"
          value={content}
          onChange={handleChange}
          className="w-full p-3 h-32 border border-stone-500 bg-stone-800 text-stone-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition"
        />
      </div>

      {/* Tags */}
      <div>
      <label className="block text-stone-200 font-semibold mb-2">Tags</label>
      <select
        name="tags"
        value={tags}
        onChange={handleTagChange}
        className="w-full p-3 border border-stone-500 bg-stone-800 text-stone-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition"
      >
        <option value="" disabled>Select a tag</option>
        <option value="Work">work</option>
        <option value="Personal">personal</option>
        <option value="Important">important</option>
        <option value="Inspiration">inspiration</option>
        <option value="Meeting">meeting</option>
        <option value="Reminder">reminder</option>
      </select>
    </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full p-3 bg-stone-600 hover:bg-accent transition-colors duration-300 rounded-lg text-stone-100 font-semibold"
      >
        Add Note
      </button>
    </form>
  );
};

export default NoteForm;




