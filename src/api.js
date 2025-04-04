import axios from "axios";

console.log("API URL:", "https://ac65f95b4630741dd8d5b486963215cc-259840844.us-west-2.elb.amazonaws.com");

const api = axios.create({
  baseURL: `https://ac65f95b4630741dd8d5b486963215cc-259840844.us-west-2.elb.amazonaws.com/api`,
});

export default api;
