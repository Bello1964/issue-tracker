import axiosClient from "@/lib/axios";

const getIssues = async (params = {}) => {
  const response = await axiosClient.get("/issues", {
    params,
  });

  return response.data;
};

const getIssue = async (issueId) => {
  const response = await axiosClient.get(`/issues/${issueId}`);
  return response.data;
};

const createIssue = async (payload) => {
  const response = await axiosClient.post("/issues", payload);
  return response.data;
};

const updateIssue = async ({ issueId, payload }) => {
  const response = await axiosClient.patch(
    `/issues/${issueId}`,
    payload
  );

  return response.data;
};

const deleteIssue = async (issueId) => {
  const response = await axiosClient.delete(`/issues/${issueId}`);

  return response.data;
};

const getIssueActivities = async (issueId) => {
  const response = await axiosClient.get(
    `/issues/${issueId}/activities`
  );

  return response.data;
};

export default {
  getIssues,
  getIssue,
  createIssue,
  updateIssue,
  deleteIssue,
  getIssueActivities,
};