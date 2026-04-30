import { FontsProvider } from "@/app/providers/FontsProvider";
import { QueryProvider } from "@/app/providers/QueryProvider";
import { RootNavigationProvider } from "@/app/providers/RootNavigationProvider";
import websocket from "@/screens/PostDetailScreen/model/websocket";
import { useEffect } from "react";

export default function App() {
  useEffect(
    () => () => {
      websocket.stop();
    },
    []
  );

  return (
    <QueryProvider>
      <FontsProvider>
        <RootNavigationProvider />
      </FontsProvider>
    </QueryProvider>
  );
}
