import axios from "axios";

const INSTA_API_URL = "https://www.instagram.com/tim0_12432/?__a=1";
const GITHUB_API_URL = "https://api.github.com/users/tim0-12432/repos";

const cors = require("cors");
export const fetchInstaPictures = async() => {
    try {
        const response = await axios.get(INSTA_API_URL);
        return response;
    } catch (error) {
        console.error(error);
    }
}

export const fetchGithubProjects = async() => {
    try {
        const response = await axios.get(GITHUB_API_URL);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}