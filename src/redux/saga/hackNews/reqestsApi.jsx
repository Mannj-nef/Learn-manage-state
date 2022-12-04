import axios from "axios";

export const fetchNewData = (query = "reactjs", method = "GET") => {
  const request = axios.request({
    method,
    url: "https://hn.algolia.com/api/v1/search",
    params: {
      query,
    },
  });

  return request;
};
