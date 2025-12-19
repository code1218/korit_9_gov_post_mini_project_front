import { api } from "../config/axiosConfig"

export const createPost = (formData) => {
    return api.post("/api/posts", formData);
}