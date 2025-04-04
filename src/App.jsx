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
import Navbar from "./components/Navbar";
import Feed from "./pages/Feed";

import UsersWithPosts from "./pages/UserswithPosts";
function App() {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Navbar />
      <div className="py-8">
        <Feed />

      </div>
      <h1>Social Media API Data</h1>
      <UsersWithPosts />
    </div>
  );
}

export default App;

