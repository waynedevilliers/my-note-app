import Navbar from '../components/Navbar';
import NoteCardContainer2 from '../components/NoteCardContainer';

const Hero = () => {
  return (
    <>
      <Navbar />
      <section
        id="hero"
        className="hero min-h-screen flex items-center justify-center relative bg-cover bg-center"
        style={{
          backgroundImage: "url('https://cdn.pixabay.com/photo/2015/05/31/15/08/blank-792125_640.jpg')", // Update the path accordingly
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="text-center text-neutral-content p-10">
          <h1 className="text-5xl font-bold mb-4">Leave a Note</h1>
          <p className="text-xl">Organize your thoughts, ideas, and tasks all in one place.</p>
        </div>
      </section>
      
      {/* Notes Section */}
      <NoteCardContainer2 />    
    </>
  );
};

export default Hero;


