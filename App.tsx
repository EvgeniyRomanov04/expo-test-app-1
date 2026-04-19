import { FontsProvider } from "@/app/providers/FontsProvider";
import { QueryProvider } from "@/app/providers/QueryProvider";
import { RootNavigationProvider } from "@/app/providers/RootNavigationProvider";
import { StoreProvider } from "@/app/providers/StoreProvider";

export default function App() {
  return (
    <QueryProvider>
      <StoreProvider>
        <FontsProvider>
          <RootNavigationProvider />
        </FontsProvider>
      </StoreProvider>
    </QueryProvider>
  );
}
