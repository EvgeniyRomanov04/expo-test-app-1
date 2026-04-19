import { useInfiniteQuery } from "@tanstack/react-query";
import { postsStore } from "./postsStore";

export const usePosts = () => {
  return useInfiniteQuery({
    queryKey: ["infinityPosts"],
    queryFn: ({ pageParam }) => postsStore.fetchPosts(pageParam),
    initialPageParam: "",
    getNextPageParam: (lastPage) =>
      lastPage?.hasMore ? lastPage.nextCursor : undefined,
  });
};
