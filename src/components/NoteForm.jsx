import { useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/storage";

const NoteForm = () => {
  const [{ title, date, content, tags }, setNote] = useState({
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
    const existingNotes = getLocalStorage("notes") || [];
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

  return (
    <dialog id="note-form" className="modal">
      <div className="w-full max-w-[1200px] modal-box p-10 rounded-lg bg-stone-700">
        <form method="dialog" className="modal-box">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>

        <div className="relative z-10 w-full flex flex-col items-center">
          <h2 className="text-2xl font-bold text-stone-100 mb-6">
            What's on your mind!
          </h2>
          <form className="w-full max-w-[1000px]" onSubmit={handleSubmit}>
            {/* Title */}
            <div className="mb-6">
              <label className="block text-stone-200 font-semibold mb-2">
                Title
              </label>
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
            <div className="mb-6">
              <label className="block text-stone-200 font-semibold mb-2">
                Date
              </label>
              <input
                type="date"
                name="date"
                value={date}
                onChange={handleChange}
                className="w-full p-3 border border-stone-500 bg-stone-800 text-stone-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition"
              />
            </div>
            {/* Content */}
            <div className="mb-6">
              <label className="block text-stone-200 font-semibold mb-2">
                Content
              </label>
              <textarea
                name="content"
                placeholder="Add your note"
                value={content}
                onChange={handleChange}
                className="w-full p-3 h-48 border border-stone-500 bg-stone-800 text-stone-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition"
              />
            </div>
            {/* Tags */}
            <div className="mb-6">
              <label className="block text-stone-200 font-semibold mb-2">
                Tags
              </label>
              <input
                type="text"
                placeholder="Add tags, separated by commas"
                name="tags"
                value={tags}
                onChange={handleChange}
                className="w-full p-3 border border-stone-500 bg-stone-800 text-stone-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition"
              />
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full p-3 bg-stone-600 hover:bg-accent transition-colors duration-300 rounded-lg text-stone-100 font-semibold"
            >
              Add Note
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default NoteForm;



