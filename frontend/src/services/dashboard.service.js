import axiosClient from "@/api/axios";

const getIssueStats = async () => {
  const response = await axiosClient.get("/issues/stats");

  return response.data;
};

export default {
  getIssueStats,
};