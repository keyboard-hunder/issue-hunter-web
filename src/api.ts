import axios from "axios";

// the base URL for your REST API backend
// const githubBaseURL = "https://api.github.com/";
// const baseApi = axios.create({ baseURL: githubBaseURL });

const serverBaseURL =
  "http://ec2-13-125-125-149.ap-northeast-2.compute.amazonaws.com:8000/";
const serverBaseAPI = axios.create({ baseURL: serverBaseURL });

export const serverLoginAPIs = {
  login: (code: string) => serverBaseAPI.post(`login/oauth/github`, { code })
};

export const serverDataAPIs = {
  getRepositories: (jwt: string) =>
    serverBaseAPI.get(`github/repositories`, {
      headers: { Authorization: `Bearer ${jwt}` }
    }),
  getIssues: (repositoryFullname: string) =>
    serverBaseAPI.get(`github/issues`, { params: { repositoryFullname } })
};
