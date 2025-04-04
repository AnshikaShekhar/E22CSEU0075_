// import { useEffect, useState } from "react";
// import API from "../api"; 
// function Feed() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     const fetchFeed = async () => {
//       const token = localStorage.getItem("accessToken");
//       const newPosts = await API.getPosts(token);
//       setPosts(newPosts.reverse()); // Newest first
//     };
//     fetchFeed();
//   }, []);

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold">Live Feed</h2>
//       {posts.map(post => (
//         <div key={post.id} className="p-4 border-b">
//           <h3 className="font-semibold">{post.title}</h3>
//           <p>{post.body}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Feed;
import { useEffect, useState } from "react";
import { getPosts } from "../api";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchFeed = async () => {
      const data = await getPosts();
      if (data.length === 0) {
        setError("No posts available or failed to load.");
      } else {
        setPosts(data);
      }
    };
    fetchFeed();
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-4">Live Feed</h1>
      {error && <p className="text-red-500">{error}</p>}
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.id} className="p-4 border rounded-lg shadow-sm bg-gray-100">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-gray-700">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Feed;

