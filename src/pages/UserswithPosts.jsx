import { useEffect, useState } from "react";
import { getUsers, getPosts } from "../api";

const UsersWithPosts = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        const usersData = await getUsers(token);
        const postsData = await getPosts(token);
        setUsers(usersData);
        setPosts(postsData);
      } catch (err) {
        setError("Failed to load users or posts.");
        console.error(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="text-white p-6">
      <h1 className="text-2xl font-bold mb-4">Users and Their Posts</h1>
      {error && <p className="text-red-500">{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id} className="mb-4">
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <ul className="ml-4">
              {posts
                .filter((post) => post.userId === user.id)
                .map((post) => (
                  <li key={post.id}>📌 {post.title}</li>
                ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersWithPosts;
