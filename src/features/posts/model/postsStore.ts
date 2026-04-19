import { makeAutoObservable, runInAction } from "mobx";
import { postsApi } from "../api/postsApi";
import { PostsResponse, Posts } from "../api/posts.types";

class PostsStore {
  posts: Posts = [];
  loading = false;
  error: string | null = null;
  data: PostsResponse | undefined;

  constructor() {
    makeAutoObservable(this);
  }

  async fetchPosts() {
    runInAction(() => {
      this.loading = true;
      this.error = null;
    });

    try {
      const data = await postsApi.get();
      runInAction(() => {
        this.posts = data.data?.posts;
      });
      return data;
    } catch (e) {
      runInAction(() => {
        this.error = "Failed to load posts";
      });
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  }
}

export const postsStore = new PostsStore();
