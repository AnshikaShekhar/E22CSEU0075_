import React, { useEffect, useState } from "react";
import axios from "axios";

const UsersWithPosts = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState({});

  useEffect(() => {
    axios.get("http://20.244.56.144/evaluation-service/users")
      .then(response => {
        setUsers(Object.entries(response.data.users));
      })
      .catch(error => console.error("Error fetching users:", error));
  }, []);

  const fetchPosts = (userId) => {
    if (!posts[userId]) {
      axios.get(`http://20.244.56.144/evaluation-service/users/${userId}/posts`)
        .then(response => {
          setPosts(prevPosts => ({ ...prevPosts, [userId]: response.data.posts }));
        })
        .catch(error => console.error(`Error fetching posts for user ${userId}:`, error));
    }
  };

  return (
    <div>
      <h2>Users and Posts</h2>
      <div className="users-list">
        {users.map(([id, name]) => (
          <div key={id} className="user-card">
            <h3>{name}</h3>
            <button onClick={() => fetchPosts(id)}>Show Posts</button>
            {posts[id] && (
              <ul className="posts-list">
                {posts[id].map(post => (
                  <li key={post.id}>{post.content}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersWithPosts;
