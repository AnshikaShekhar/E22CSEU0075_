import { useEffect, useState } from "react";
import API from "../api"; 
function TopUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const token = localStorage.getItem("accessToken");
      const data = await API.getUsers(token);
      const sortedUsers = data.sort((a, b) => b.postCount - a.postCount).slice(0, 5);
      setUsers(sortedUsers);
    };
    fetchUsers();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Top 5 Users with Most Posts</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id} className="p-4 border-b">
            {user.name} - {user.postCount} Posts
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TopUsers;
