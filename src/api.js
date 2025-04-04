import axios from "axios";

console.log("API URL:", import.meta.env.VITE_API_URL);

const api = axios.create({
  baseURL: `http://ac65f95b4630741dd8d5b486963215cc-259840844.us-west-2.elb.amazonaws.com/api`,
});

export default api;
