import React from "react";

function Filter(props) {
  let setCategory = props.setCategory;
  let category = props.category;
  let filterdata = props.filterdata;

  function categoryHandler(title) {
    setCategory(title);
  }

  return (
    <div className="w-11/12 max-w-2xl mx-auto py-8">
      {/* Container with glass effect */}
      <div className="backdrop-blur-lg bg-backgroundLight/30 rounded-2xl p-4 shadow-lg border border-borderColor">
        {/* Flex container for buttons */}
        <div className="flex flex-wrap gap-3 justify-center items-center">
          {filterdata.map((data) => {
            const isActive = category === data.title;
            return (
              <button
                className={`
                  relative group px-6 py-3 rounded-xl font-medium text-sm uppercase tracking-wider
                  transition-all duration-300 ease-in-out transform hover:-translate-y-1
                  ${
                    isActive
                      ? "text-white bg-gradient-to-r from-accent via-pink-400 to-accent bg-size-200 animate-gradient shadow-lg shadow-accent/25"
                      : "text-primary/90 hover:text-white bg-backgroundDark/40 hover:bg-backgroundDark/60"
                  }
                `}
                key={data.id}
                onClick={() => categoryHandler(data.title)}
              >
                {/* Glowing border for active state */}
                <span className={`
                  absolute inset-0 rounded-xl transition-opacity duration-300
                  ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'}
                  pointer-events-none
                  before:absolute before:inset-0 before:rounded-xl before:p-[1px]
                  before:bg-gradient-to-r before:from-accent before:via-pink-400 before:to-accent
                  before:opacity-60 before:blur-sm
                `}></span>
                
                {/* Button text with optional icon */}
                <span className="relative flex items-center gap-2">
                  {data.title}
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                  )}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Filter;

// Add this to your index.css or create a new styles.css
const styles = `
@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.bg-size-200 {
  background-size: 200% 200%;
  animation: gradientShift 4s linear infinite;
}

.animate-gradient {
  animation: gradientShift 4s linear infinite;
}
`;
