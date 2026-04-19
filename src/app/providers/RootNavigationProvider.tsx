import { NavigationContainer } from "@react-navigation/native";
import { RootNavigator } from "../navigation/root/RootNavigation";

export const RootNavigationProvider = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};
