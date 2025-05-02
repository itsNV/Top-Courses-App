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
        setLikedCourse(course.id);
      } else {
        // non-empty
        setLikedCourse((prev) => [...prev, course.id]);
      }
      toast.success("Liked Successfully");
    }
  }

  return (
    <div className="w-[300px] bg-black bg-opacity-80 rounded-md overflow-hidden">
      <div className="relative">
        <img src={image.url} alt="" />

        <div
          className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px]
            grid place-items-center"
        >
          <button onClick={clickHandler}>
            {likedCourse.includes(course.id) ? (
              <FcLike fontSize="1.75rem" />
            ) : (
              <FcLikePlaceholder fontSize="1.75rem" />
            )}
          </button>
        </div>
      </div>

      <div className="p-4">
        <p className="text-white font-semibold text-lg leading-6">{title}</p>
        <p className="mt-2 text-white">{description}</p>
      </div>
    </div>
  );
}

export default Card;
