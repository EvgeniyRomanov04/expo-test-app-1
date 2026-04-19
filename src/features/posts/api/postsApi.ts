import { apiClient } from "@/shared/api/apiClient";
import { PostsPequestParam, PostsResponse } from "./posts.types";

export const postsApi = {
  get: async (cursor: string | undefined): Promise<PostsResponse> => {
    const params: PostsPequestParam["query"] = { cursor };
    const { data } = await apiClient.get("/posts", { params });
    return data;
  },
};
