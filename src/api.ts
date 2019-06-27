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
  getRepositories: (jwt: string, page: number) =>
    serverBaseAPI.get(`github/repositories`, {
      params: { page },
      headers: { Authorization: `Bearer ${jwt}` }
    }),
  getIssues: (repositoryFullName: string, page: number) =>
    serverBaseAPI.get(`github/issues`, { params: { repositoryFullName, page } })
};
