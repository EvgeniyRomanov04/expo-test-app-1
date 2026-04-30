import { makeAutoObservable, runInAction } from "mobx";
import { postsApi } from "../api/postsApi";
import { Posts, PostsPequestParam } from "../api/posts.types";
import { TabTypes } from "../ui/PostTabs/types";
import websocket from "@/screens/PostDetailScreen/model/websocket";

class PostsStore {
  posts: Posts = [];
  error: string | null = null;
  nextCursor: string | null | undefined;
  hasMore: boolean | undefined;
  tab: TabTypes = undefined;

  constructor() {
    makeAutoObservable(this);

    websocket.emitter.addListener("like_updated", (event) => {
      this.updateLike(event.postId, event.likesCount);
    });
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

  async toogleLike(id: string) {
    const post = this.getPostById(id);
    if (!post) return;
    post.likesCount = post.likesCount! + (post.isLiked ? -1 : 1);
    post.isLiked = !post.isLiked;
    const data = await postsApi.likePost(id);
    runInAction(() => {
      if (post && data) {
        post.isLiked = data.isLiked;
        post.likesCount = data.likesCount;
      }
    });
    return data;
  }

  updateLike(id: string, count: number) {
    const post = this.getPostById(id);
    if (!post) return;
    post.likesCount = count;
  }

  getPostById(id: string) {
    return this.posts?.find((post) => post.id === id);
  }
}

export default new PostsStore();
