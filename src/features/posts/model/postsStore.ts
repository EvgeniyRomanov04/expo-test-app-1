import { makeAutoObservable, runInAction } from "mobx";
import { postsApi } from "../api/postsApi";
import { Posts, PostsPequestParam } from "../api/posts.types";
import { TabTypes } from "../ui/PostTabs/types";

class PostsStore {
  posts: Posts = [];
  error: string | null = null;
  nextCursor: string | null | undefined;
  hasMore: boolean | undefined;
  tab: TabTypes = undefined;

  constructor() {
    makeAutoObservable(this);
  }

  setTab(type: TabTypes) {
    const currentType = type === "all" ? undefined : type;
    this.tab = currentType;
    this.fetchPosts({ type: currentType });
  }

  async fetchPosts(option?: {
    nextCursor?: string | null;
    type?: NonNullable<PostsPequestParam["query"]>["tier"];
  }) {
    this.error = null;

    try {
      const nextCursor = option?.nextCursor;
      const isPagination = nextCursor && nextCursor?.length > 0;
      const data = (
        await postsApi.get(isPagination ? nextCursor : undefined, option?.type)
      ).data;
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

export default new PostsStore();
