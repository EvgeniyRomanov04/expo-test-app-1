import { makeAutoObservable, runInAction } from "mobx";
import { postsApi } from "../api/postsApi";
import { PostsResponse, Posts } from "../api/posts.types";

class PostsStore {
  posts: Posts = [];
  error: string | null = null;
  nextCursor: string | null | undefined;
  hasMore: boolean | undefined;

  constructor() {
    makeAutoObservable(this);
  }

  async fetchPosts(nextCursor: string | null | undefined) {
    runInAction(() => {
      this.error = null;
    });

    try {
      const isPagination = nextCursor && nextCursor?.length > 0;
      const data = (await postsApi.get(isPagination ? nextCursor : undefined))
        .data;
      runInAction(() => {
        this.posts =
          isPagination && data?.posts
            ? [...this.posts!, ...data.posts]
            : data?.posts;
        this.hasMore = data?.hasMore;
        this.nextCursor = data?.nextCursor;
      });
      return data;
    } catch (e) {
      runInAction(() => {
        this.error = "Failed to load posts";
      });
    }
  }
}

export const postsStore = new PostsStore();
