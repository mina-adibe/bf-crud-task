import axios from "axios";
import { requestHandler, successHandler, errorHandler } from "../interceptors";

export const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

// Handle request process
axiosInstance.interceptors.request.use((request) => requestHandler(request));
// Handle response process
axiosInstance.interceptors.response.use(
  (response) => successHandler(response),
  (error) => errorHandler(error)
);

// get all posts
export const getData = async () => {
  return await axiosInstance.get(`/posts`);
};

// get post details
export const getPostDeatils = async (id) => {
  return await axiosInstance.get(`/posts/${id}`);
};
// update post
export const updatePost = async (id) => {
  return await axiosInstance.put(`/posts/${id}`);
};
// delete post
export const deletePost = async (id) => {
  return await axiosInstance.delete(`/posts/${id}`);
};
