import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootParamList } from "./types";
import { FeedScreen } from "@/screens/FeedScreen";

const Stack = createNativeStackNavigator<RootParamList>();

export const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Feed"
        component={FeedScreen}
        options={{ title: "Home" }}
      />
    </Stack.Navigator>
  );
};
