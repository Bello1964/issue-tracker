import axios from "@/lib/axios";

const getUsers = () => {
  return axios.get("/users");
};

const promoteUser = (userId) => {
  return axios.patch(`/users/${userId}/promote`);
};

const demoteUser = (userId) => {
  return axios.patch(`/users/${userId}/demote`);
};

export default {
  getUsers,
  promoteUser,
  demoteUser,
};