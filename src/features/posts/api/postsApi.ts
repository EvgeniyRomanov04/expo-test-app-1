import { apiClient } from "@/shared/api/apiClient";
import {
  PostDetailResponse,
  PostsPequestParam,
  PostsResponse,
} from "./posts.types";
import { AxiosResponse } from "axios";

export const postsApi = {
  get: async (
    cursor: string | undefined,
    tier?: NonNullable<PostsPequestParam["query"]>["tier"]
  ): Promise<PostsResponse> => {
    const params: PostsPequestParam["query"] = { cursor, tier };
    const { data } = await apiClient.get("/posts", { params });
    return data;
  },
  getPost: async (
    id: string
  ): Promise<NonNullable<PostDetailResponse["data"]>["post"]> => {
    const { data } = await apiClient.get<
      any,
      AxiosResponse<PostDetailResponse>
    >(`/posts/${id}`);
    return data.data?.post;
  },
};
