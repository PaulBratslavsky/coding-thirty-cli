import qs from "qs";

const query = qs.stringify({
  populate: "*",
})

export const settings = {
  query,
  url: "https://seal-app-ylnsp.ondigitalocean.app",
  path: "/api/posts",
  token: null,
};
