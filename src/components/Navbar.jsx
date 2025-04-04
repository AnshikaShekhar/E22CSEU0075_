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

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex gap-4">
        <li><Link to="/">Feed</Link></li>
        <li><Link to="/users-posts">Users with Posts</Link></li>
        <li><Link to="/top-users">Top Users</Link></li>
        <li><Link to="/trending-posts">Trending Posts</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;

