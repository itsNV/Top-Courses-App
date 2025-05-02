import React from "react";
import Card from "./Card";

function Cards(props) {
    let courses = props.courses;
    
    let category = props.category;
   
    
    function getCourse() {
        let allcourses = [];
        if (category === "All") {
            Object.values(courses).forEach((course) => {
                course.forEach((data) => {
                  allcourses.push(data);
                });
              });
              
                return allcourses;
        }
        else {
            return courses[category];
        }
   


     
  }

  return (
    <div className="w-[80%] flex flex-wrap justify-center gap-4 mb-4 ml-[12rem]">
      {getCourse().map((course) => {
        return <Card key={course.id} course={course} />;
      })}
    </div>
  );
}

export default Cards;
