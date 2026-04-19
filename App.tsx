import { FontsProvider } from "@/app/providers/FontsProvider";
import { RootNavigationProvider } from "@/app/providers/RootNavigationProvider";

export default function App() {
  return (
    <FontsProvider>
      <RootNavigationProvider />
    </FontsProvider>
  );
}
