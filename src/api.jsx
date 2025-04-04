// const BASE_URL = "http://20.244.56.144/evaluation-service";

// const API = {
//   register: async (userData) => {
//     const response = await fetch(`${BASE_URL}/register`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(userData),
//     });
//     return response.json();
//   },

//   getAuthToken: async (authData) => {
//     const response = await fetch(`${BASE_URL}/auth`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(authData),
//     });
//     return response.json();
//   },

//   getUsers: async (token) => {
//     const response = await fetch(`${BASE_URL}/users`, {
//       method: "GET",
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     return response.json();
//   },

//   getPosts: async (token) => {
//     const response = await fetch(`${BASE_URL}/posts`, {
//       method: "GET",
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     return response.json();
//   },

//   getComments: async (token) => {
//     const response = await fetch(`${BASE_URL}/comments`, {
//       method: "GET",
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     return response.json();
//   },
// };

// export default API;

export const getPosts = async () => {
  try {
    const response = await fetch("http://20.244.56.144/evaluation-service/posts");
    
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Fetch error:", error);
    return []; 
  }
};
