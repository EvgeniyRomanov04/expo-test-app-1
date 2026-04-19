import { paths } from "@/shared/api/types";

export type PostsResponse =
  paths["/posts"]["get"]["responses"][200]["content"]["application/json"];

export type PostsPequestParam = paths["/posts"]["get"]["parameters"];

export type Posts = NonNullable<PostsResponse["data"]>["posts"];

export type Post = NonNullable<Posts>[number];
