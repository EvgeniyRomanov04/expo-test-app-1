import { useQuery } from "@tanstack/react-query";
import { postsStore } from "./postsStore";

export const usePosts = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: () => postsStore.fetchPosts(),
  });
};
