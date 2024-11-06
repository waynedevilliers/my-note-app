import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Swiper core styles
import 'swiper/css/navigation'; // Styles for navigation arrows (optional)
import 'swiper/css/pagination'; // Styles for pagination (optional)

import notes from '../data/notes'; // Importing notes

const NoteCardCarousel = () => {
  return (
    <section className="p-8 bg-base-100">
      <h2 className="text-3xl font-bold text-accent text-center mb-10">Recent Notes</h2>
      <Swiper
        spaceBetween={30} // Space between slides
        slidesPerView={1} // Number of slides visible at once
        loop={true} // Loop through the slides
        autoplay={{ delay: 2500 }} // Autoplay every 2.5 seconds
        breakpoints={{
          640: {
            slidesPerView: 2, // 2 slides on small screens
          },
          1024: {
            slidesPerView: 3, // 3 slides on larger screens
          },
        }}
      >
        {notes.map((note) => (
          <SwiperSlide key={note.id}>
            <div className="note-card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold text-accent mb-2">{note.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{note.content}</p>
              <div className="flex gap-2">
                {note.tags.map((tag, index) => (
                  <span key={index} className="text-xs bg-accent text-white px-2 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default NoteCardCarousel;

