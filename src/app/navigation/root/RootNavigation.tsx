import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootParamList } from "./types";
import { FeedScreen } from "@/screens/FeedScreen";
import { colors } from "@/shared/design-tokens/colors";
import { PostDetailScreen } from "@/screens/PostDetailScreen";

const Stack = createNativeStackNavigator<RootParamList>();

export const RootNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: colors.background.app },
      }}
    >
      <Stack.Screen name="Feed" component={FeedScreen} />
      <Stack.Screen name="PostDetail" component={PostDetailScreen} />
    </Stack.Navigator>
  );
};
