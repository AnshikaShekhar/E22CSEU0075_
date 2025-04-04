// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import TopUsers from "./pages/TopUsers.jsx";
// import TrendingPosts from "./pages/TrendingPosts.jsx";
// import Feed from "./pages/Feed.jsx";
// import Navbar from "./components/Navbar.jsx";

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Feed />} />
//         <Route path="/top-users" element={<TopUsers />} />
//         <Route path="/trending-posts" element={<TrendingPosts />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Feed from "./pages/Feed";
import UsersWithPosts from "src/pages/UsersWithPosts.jsx";


// ✅ This line is fine if file exists and default exported
import TopUsers from "./pages/TopUsers";
import TrendingPosts from "./pages/TrendingPosts";

function App() {
  return (
    <Router>
      <div className="bg-gray-900 min-h-screen">
        <Navbar />
        <div className="py-8 px-4">
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/users-posts" element={<UsersWithPosts />} />
            <Route path="/top-users" element={<TopUsers />} />
            <Route path="/trending-posts" element={<TrendingPosts />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
