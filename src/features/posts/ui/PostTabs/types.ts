import { PostsPequestParam } from "../../api/posts.types";

export type TabTypes = NonNullable<PostsPequestParam["query"]>["tier"] | "all";

export interface Tab {
  type: NonNullable<TabTypes>;
}
