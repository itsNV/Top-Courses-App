import React from 'react';

function Navbar() {
  return (
    <div className="sticky top-0 z-50 backdrop-blur-xl bg-backgroundDark/30">
      <nav className="max-w-7xl mx-auto">
        <div className="relative py-6 px-4">
          {/* Decorative gradient line */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent"></div>
          
          {/* Main heading with hover effect */}
          <div className="relative group cursor-default">
            <h1 className="text-4xl font-bold text-center text-primary tracking-tight transition-all duration-300 group-hover:text-accent">
              Top Courses
            </h1>
            
            {/* Subtle glow effect */}
            <div className="absolute -inset-1 bg-accent/20 rounded-lg blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
