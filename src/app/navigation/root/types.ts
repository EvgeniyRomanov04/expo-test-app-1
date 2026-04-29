import { Post } from "@/features/posts/api/posts.types";

export type RootParamList = {
  Feed: undefined;
  PostDetail: { id: string; focus?: boolean };
};
