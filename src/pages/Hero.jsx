import { useState } from 'react';
import NoteCardContainer from "../components/NoteCardContainer";
import NoteForm from "../components/NoteForm";

const Hero = () => {
  // State to manage the visibility of the form
  const [showForm, setShowForm] = useState(false);

  // Function to toggle form visibility
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      <section
        id="hero"
        className="hero min-h-screen w-full border-b-4 border-stone-300 relative flex items-center justify-center text-center"
        style={{
          backgroundImage:
            "url(https://cdn.pixabay.com/photo/2015/05/31/15/08/blank-792125_640.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-overlay bg-stone-800 bg-opacity-70 absolute inset-0"></div>
        <div className="relative z-10 max-w-[1280px] w-full flex flex-col items-center">
          <h2 className="text-5xl font-bold text-stone-100 mb-4">Leave a Note!</h2>

          {/* Button to toggle form visibility */}
          <button
            onClick={toggleForm}
            className="bg-stone-600 text-stone-100 px-6 py-3 rounded-lg shadow-md hover:bg-stone-500 transition duration-300 mb-6"
          >
            {showForm ? "Close Form" : "Click me"}
          </button>

          {/* Form container that slides in/out */}
          <div
            className={`w-full max-w-lg p-6 bg-stone-800 rounded-lg shadow-lg border border-stone-500 mt-6 transition-all duration-500 ${
              showForm ? 'max-h-[700px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
            }`}
          >
            <h3 className="text-2xl font-semibold text-stone-100 mb-4">
              What's on your mind?
            </h3>

            <NoteForm />
          </div>
        </div>
      </section>

      {/* Container for notes */}
      <section className="bg-stone-300 py-8 p-4">
        <NoteCardContainer />
      </section>
    </>
  );
};

export default Hero;











