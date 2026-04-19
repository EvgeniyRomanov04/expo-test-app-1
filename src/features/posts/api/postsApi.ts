import { apiClient } from "@/shared/api/apiClient";
import { PostsResponse } from "./posts.types";

export const postsApi = {
  get: async (): Promise<PostsResponse> => {
    const { data } = await apiClient.get("/posts");
    return data;
  },
};
