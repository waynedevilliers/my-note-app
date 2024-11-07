import NoteCardContainer from "../components/NoteCardContainer";
import NoteForm from "../components/NoteForm";

const Hero = () => {

  const handleClick = () => {
    document.getElementById("note-form").showModal();
  };


    return (
        <>
            <section
                id="hero"
                className="hero min-h-screen w-full border-b-4 border-stone-300 relative flex items-center justify-center text-center"
                style={{
                    backgroundImage: "url(https://cdn.pixabay.com/photo/2015/05/31/15/08/blank-792125_640.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="hero-overlay bg-stone-800 bg-opacity-70 absolute inset-0"></div>
                <div className="relative z-10 max-w-[1280px] w-full flex flex-col items-center">
                    <h2 className="text-5xl font-bold text-stone-100 mb-4">Leave a Note!</h2>
                    <button
            onClick={handleClick}
            className="px-6 py-3 mt-4 bg-accent text-stone-100 text-lg font-semibold rounded-lg shadow-md hover:bg-stone-600 hover:shadow-lg transition-all duration-300"
          >
            Add a Note
          </button>
                </div>
                <div>
                  <NoteForm />
                </div>
            </section>
            <div>
                <NoteCardContainer />
            </div>
        </>
    );
};

export default Hero;







