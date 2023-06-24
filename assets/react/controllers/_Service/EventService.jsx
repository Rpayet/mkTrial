import axios from "axios";

const ApiService = {
  async get(url) {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  async post(url, data) {
    try {
      const response = await axios.post(url, data);
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  // Autres méthodes (put, delete, etc.)
};

export default ApiService;
