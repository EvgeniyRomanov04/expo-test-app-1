import { paths } from "@/shared/api/types";

export type PostsResponse =
  paths["/posts"]["get"]["responses"][200]["content"]["application/json"];

export type PostsPequestParam = NonNullable<
  paths["/posts"]["get"]["parameters"]
>;

export type Posts = NonNullable<PostsResponse["data"]>["posts"];

export type Post = NonNullable<Posts>[number];

export type PostDetailResponse =
  paths["/posts/{id}"]["get"]["responses"]["200"]["content"]["application/json"];

export type PostLikeToggleResponse = NonNullable<
  paths["/posts/{id}/like"]["post"]["responses"]["200"]["content"]["application/json"]
>;

export type PostCommentsRequest = NonNullable<
  paths["/posts/{id}/comments"]["get"]["parameters"]
>;

export type PostCommentsResponse = NonNullable<
  paths["/posts/{id}/comments"]["get"]["responses"]["200"]["content"]["application/json"]
>;

export type PostCommentCreateResponse = NonNullable<
  paths["/posts/{id}/comments"]["post"]["responses"]["201"]["content"]["application/json"]
>;
