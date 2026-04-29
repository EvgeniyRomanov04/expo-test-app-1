import { FontsProvider } from "@/app/providers/FontsProvider";
import { QueryProvider } from "@/app/providers/QueryProvider";
import { RootNavigationProvider } from "@/app/providers/RootNavigationProvider";

export default function App() {
  return (
    <QueryProvider>
      <FontsProvider>
        <RootNavigationProvider />
      </FontsProvider>
    </QueryProvider>
  );
}
