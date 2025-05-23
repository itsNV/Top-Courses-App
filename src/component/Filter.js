import React from "react";

function Filter(props) {
  let setCategory = props.setCategory;
  let category = props.category;
  let filterdata = props.filterdata;

  function categoryHandler(title) {
    setCategory(title);
  }
  return (
    <div className="w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center">
      {filterdata.map((data) => {
        return (
          <button
            className={`text-lg px-2 py-1 rounded-md font-medium 
            text-white bg-black hover:bg-opacity-50 border-2 transition-all duration-300
                      ${
                        category === data.title
                          ? "bg-opacity-60 border-white"
                          : "bg-opacity-40 border-transparent"
                      }`}
            key={data.id}
            onClick={() => categoryHandler(data.title)}
          >
            {data.title}
          </button>
        );
      })}
    </div>
  );
}

export default Filter;
