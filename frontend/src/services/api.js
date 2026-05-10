import axios from "axios";

const API = "http://localhost:5000";

export const createRule = async (ruleData) => {
  const response = await axios.post(
    `${API}/rules`,
    ruleData
  );

  return response.data;
};

export const fetchRules = async () => {
  const response = await axios.get(
    `${API}/rules`
  );

  return response.data;
};

export const deleteRule = async (id) => {
  const response = await axios.delete(
    `${API}/rules/${id}`
  );

  return response.data;
};

export const processText = async (text) => {
  const response = await axios.post(
    `${API}/process`,
    { text }
  );

  return response.data;
};