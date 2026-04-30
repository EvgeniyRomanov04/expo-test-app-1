import { apiClient } from "@/shared/api/apiClient";
import {
  PostCommentsRequest,
  PostCommentsResponse,
  PostDetailResponse,
  PostLikeToggleResponse,
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
  likePost: async (id: string): Promise<PostLikeToggleResponse["data"]> => {
    const { data } = await apiClient.post<
      any,
      AxiosResponse<PostLikeToggleResponse>
    >(`/posts/${id}/like`);
    return data.data;
  },
  getPostComments: async (
    id: string,
    cursor?: string | null
  ): Promise<PostCommentsResponse["data"]> => {
    const params: PostCommentsRequest["query"] = {
      cursor: cursor ?? undefined,
    };
    const { data } = await apiClient.get<
      any,
      AxiosResponse<PostCommentsResponse>
    >(`/posts/${id}/comments`, { params });

    return data.data;
  },
};
