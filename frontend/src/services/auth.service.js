import axiosClient from "@/lib/axios";

const login = async (payload) => {
  const response = await axiosClient.post("/auth/login", payload);
  return response.data;
};

const register = async (payload) => {
  const response = await axiosClient.post("/auth/register", payload);
  return response.data;
};

const getCurrentUser = async () => {
  const response = await axiosClient.get("/auth/me");
  return response.data;
};

const logout = async () => {
  const response = await axiosClient.post("/auth/logout");
  return response.data;
};

const authService = {
  login,
  register,
  getCurrentUser,
  logout,
};

export default authService;