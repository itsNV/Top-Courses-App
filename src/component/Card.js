import React, { useState } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

function Card({ course }) {
  const [likedCourse, setLikedCourse] = useState([]);

  let image = course.image;
  let title = course.title;
  let description = course.description;

  if (description.length > 100) {
    description = description.substring(0, 100) + "...";
  }

  function clickHandler() {
    if (likedCourse.includes(course.id)) {
      // already in liked course
      setLikedCourse((...prev) => prev.filter((cid) => (course.id !== cid)));
      toast.warning("Like Removed");
    } else {
      // if empty
      if (likedCourse.length === 0) {
        setLikedCourse([course.id]);
      } else {
        // non-empty
        setLikedCourse((prev) => [...prev, course.id]);
      }
      toast.success("Liked Successfully");
    }
  }

  return (
    <div className="relative w-[300px] rounded-2xl overflow-hidden shadow-xl transition-transform duration-300 hover:scale-105 group">
      {/* Gradient border using a pseudo-element */}
      <div className="absolute inset-0 z-0 pointer-events-none before:content-[''] before:absolute before:inset-0 before:rounded-2xl before:p-[2px] before:bg-gradient-to-tr before:from-accent before:via-pink-400 before:to-yellow-400 before:opacity-60 before:blur-sm before:z-0"></div>
      <div className="relative z-10 bg-backgroundLight backdrop-blur-xl border border-borderColor rounded-2xl overflow-hidden flex flex-col h-full">
        <div className="relative">
          <img src={image.url} alt="" className="w-full h-48 object-cover rounded-t-2xl" />
          <div
            className="w-[44px] h-[44px] bg-primary rounded-full absolute right-4 bottom-[-22px] grid place-items-center shadow-lg border border-borderColor transition-transform duration-200 hover:scale-110 hover:shadow-pink-200/60 focus:scale-110"
          >
            <button onClick={clickHandler} className="focus:outline-none">
              {likedCourse.includes(course.id) ? (
                <FcLike fontSize="2rem" />
              ) : (
                <FcLikePlaceholder fontSize="2rem" />
              )}
            </button>
          </div>
        </div>
        <div className="p-5 pt-8 flex-1 flex flex-col">
          <p className="text-primary font-extrabold text-xl leading-7 mb-2 drop-shadow-sm tracking-tight">
            {title}
          </p>
          <p className="mt-1 text-primary/80 text-base leading-relaxed flex-1">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
