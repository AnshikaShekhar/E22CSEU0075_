const BASE_URL = "http://20.244.56.144/evaluation-service";

export const register = async (userData) => {
  const response = await fetch(`${BASE_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  return response.json();
};

export const getAuthToken = async (authData) => {
  const response = await fetch(`${BASE_URL}/auth`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(authData),
  });
  return response.json();
};

export const getUsers = async (token) => {
  const response = await fetch(`${BASE_URL}/users`, {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.json();
};

export const getPosts = async (token) => {
  const response = await fetch(`${BASE_URL}/posts`, {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.json();
};

export const getComments = async (token) => {
  const response = await fetch(`${BASE_URL}/comments`, {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.json();
};

// ✅ Exporting API object as default
const API = {
  register,
  getAuthToken,
  getUsers,
  getPosts,
  getComments,
};

export default API;
