 import axios from "axios";

export const makeRequest = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Authorization: `bearer bc606209c52efaa32a32364f3371f9edddb92f8eb76e0f3e1583d01973697725e599399919e1be4ab2712e08d04cc6fbbab0cb3579641c241e69048fe32fc170d38b25b6aa1525c62c2f396745dce601c8d9d2364f117360d57f594b966725fafdb843ac804b4c74a40e9ef7bd767c5c0ea517ab9f068f275967cd33482a3f12`,
  },
});