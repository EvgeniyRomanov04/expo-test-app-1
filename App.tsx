import { useEffect } from "react";
import { FontsProvider } from "@/app/providers/FontsProvider";
import { QueryProvider } from "@/app/providers/QueryProvider";
import { RootNavigationProvider } from "@/app/providers/RootNavigationProvider";
import websocket from "@/features/detail/model/websocket";

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
