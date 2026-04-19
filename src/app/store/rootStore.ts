import { postsStore } from "@/features/posts/model/postsStore";

export class RootStore {
  postsStore = postsStore;
}

export const rootStore = new RootStore();
