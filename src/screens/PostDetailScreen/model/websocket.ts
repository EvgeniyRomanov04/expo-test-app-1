import { components } from "@/shared/api/types";
import { EventEmitter } from "expo";

type EventMap = {
  like_updated: (event: {
    type: "like_updated";
    postId: string;
    likesCount: number;
  }) => void;
  comment_added: (event: {
    type: "comment_added";
    postId: string;
    comment: components["schemas"]["Comment"];
  }) => void;
};

class PostDetailWebSocket {
  public emitter = new EventEmitter<EventMap>();
  ws: WebSocket | undefined;

  constructor() {
    this.ws = new WebSocket(
      `https://${process.env.EXPO_PUBLIC_API_HOST}/test-app/ws?token=${process.env.EXPO_PUBLIC_ANY_UUID}`
    );

    this.ws.onmessage = (event: any) => {
      const data = JSON.parse(event.data);
      this.emitter.emit(data.type, data);
    };
  }

  public stop() {
    this.ws?.close();
  }
}

export default new PostDetailWebSocket();
