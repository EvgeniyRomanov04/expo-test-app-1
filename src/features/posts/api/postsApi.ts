import { apiClient } from "@/shared/api/apiClient";
import { PostsPequestParam, PostsResponse } from "./posts.types";

export const postsApi = {
  get: async (
    cursor: string | undefined,
    tier?: NonNullable<PostsPequestParam["query"]>["tier"]
  ): Promise<PostsResponse> => {
    const params: PostsPequestParam["query"] = { cursor, tier };
    const { data } = await apiClient.get("/posts", { params });
    return data;
  },
};
