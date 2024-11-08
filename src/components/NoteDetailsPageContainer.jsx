import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getLocalStorage, setLocalStorage } from "../utils/storage";

const NoteDetailsPageContainer = () => {
  const { noteId } = useParams();
  const navigate = useNavigate();
  const [noteDetails, setNoteDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [editedNote, setEditedNote] = useState(null);

  // Sample list of predefined tags
  const predefinedTags = [
    "work",
    "personal",
    "urgent",
    "important",
    "follow-up",
  ];

  useEffect(() => {
    const notes = getLocalStorage("notes") || [];
    const note = notes.find((note) => String(note.id) === String(noteId));
    if (note) {
      setNoteDetails(note);
      setEditedNote(note); // Initial state for editing
    }
    setLoading(false);
  }, [noteId]);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedNote((prev) => ({ ...prev, [name]: value }));
  };

  const handleTagChange = (e, index) => {
    const { value } = e.target;
    const updatedTags = [...editedNote.tags];
    updatedTags[index] = value;
    setEditedNote((prev) => ({ ...prev, tags: updatedTags }));
  };

  const handleAddTag = (e) => {
    const selectedTag = e.target.value;
    if (selectedTag && !editedNote.tags.includes(selectedTag)) {
      setEditedNote((prev) => ({ ...prev, tags: [...prev.tags, selectedTag] }));
    }
    e.target.value = ""; // Reset dropdown selection
  };

  const handleRemoveTag = (index) => {
    const updatedTags = editedNote.tags.filter((_, i) => i !== index);
    setEditedNote((prev) => ({ ...prev, tags: updatedTags }));
  };

  const handleSave = () => {
    const notes = getLocalStorage("notes") || [];
    const updatedNotes = notes.map((note) =>
      note.id === editedNote.id ? editedNote : note
    );
    setLocalStorage("notes", updatedNotes);
    setNoteDetails(editedNote); // Update note details with the edited version
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedNote(noteDetails); // Reset to original note
    setIsEditing(false);
  };

  if (loading) {
    return <p className="text-center text-stone-600">Loading...</p>;
  }

  if (!noteDetails) {
    return <p className="text-center text-stone-600">Note not found.</p>;
  }

  return (
    <section className="min-h-screen min-w-screen flex justify-center items-center bg-stone-300">
      <div
        id="note-id-container"
        className={`bg-stone-50 ${isEditing ? "w-[800px]" : "max-w-2xl"} mx-4 rounded-lg shadow-lg overflow-hidden p-8 border border-stone-400 transition-all duration-300`}
      >
        <div className="mb-6 min-w-screen">
          <h2 className="text-4xl font-bold text-stone-700 mb-2">
            {isEditing ? (
              <input
                type="text"
                name="title"
                value={editedNote.title}
                onChange={handleInputChange}
                className="w-full p-2 text-xl border border-stone-400 rounded-lg"
              />
            ) : (
              noteDetails.title
            )}
          </h2>
          <p className="text-sm text-stone-400">
            {isEditing ? (
              <input
                type="date"
                name="date"
                value={editedNote.date}
                onChange={handleInputChange}
                className="w-full p-2 text-sm border border-stone-400 rounded-lg"
              />
            ) : (
              noteDetails.date
            )}
          </p>
        </div>
        <div className="text-stone-700 leading-relaxed">
          {isEditing ? (
            <textarea
              name="content"
              value={editedNote.content}
              onChange={handleInputChange}
              className="w-full p-4 text-stone-700 border border-stone-400 rounded-lg h-40"
            />
          ) : (
            <p className="mb-4">{noteDetails.content}</p>
          )}
        </div>

        {isEditing ? (
          <div className="mt-6">
            <h3 className="text-lg font-bold text-stone-700">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {editedNote.tags.map((tag, index) => (
                <span
                  key={index}
                  className="flex items-center text-xs font-medium text-stone-100 bg-stone-600 px-3 py-1 rounded-full"
                >
                  {tag}
                  <button
                    onClick={() => handleRemoveTag(index)}
                    className="ml-2 text-stone-100 hover:text-red-500"
                  >
                    &times;
                  </button>
                </span>
              ))}
            </div>
            <select
              onChange={handleAddTag}
              className="mt-2 px-3 py-2 border border-stone-400 rounded-lg"
            >
              <option value="">Add a tag...</option>
              {predefinedTags.map((tag) => (
                <option key={tag} value={tag}>
                  {tag}
                </option>
              ))}
            </select>
          </div>
        ) : (
          noteDetails.tags &&
          noteDetails.tags.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {noteDetails.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-xs font-medium text-stone-100 bg-stone-600 px-3 py-1 rounded-full hover:bg-stone-500 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          )
        )}

        <div className="mt-6 flex gap-4">
          {isEditing ? (
            <>
              <button
                onClick={handleSave}
                className="flex items-right right-0 justify-end px-4 py-2 b bg-stone-500 text-white rounded-lg hover:bg-stone-700"
              >
                Save
              </button>
              <button
                onClick={handleCancel}
                className="px-4 py-2 bg-stone-500 text-white rounded-lg hover:bg-stone-700"
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              onClick={handleEditToggle}
              className="px-4 py-2 bg-stone-500 text-white rounded-lg hover:bg-stone-700 transition-colors"
            >
              Edit
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default NoteDetailsPageContainer;

