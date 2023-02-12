const axios = require("axios");

export const instanceAxios = axios.create({
	baseURL: "https://companyenrichment.abstractapi.com/v1/",
});
