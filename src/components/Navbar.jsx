// import { Link } from "react-router-dom";

// function Navbar() {
//   return (
//     <nav className="p-4 bg-gray-900 text-white flex gap-4">
//       <Link to="/">Feed</Link>
//       <Link to="/top-users">Top Users</Link>
//       <Link to="/trending-posts">Trending Posts</Link>
//     </nav>
//   );
// }

// export default Navbar;

import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 shadow-lg">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <h1 className="text-white text-lg font-bold">MyApp</h1>
        <div className="space-x-4">
          <a href="#" className="text-white hover:underline">Feed</a>
          <a href="#" className="text-white hover:underline">Top Users</a>
          <a href="#" className="text-white hover:underline">Trending Posts</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
