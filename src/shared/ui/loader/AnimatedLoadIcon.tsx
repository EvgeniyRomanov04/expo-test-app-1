import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import { useEffect } from "react";
import { PathProps } from "react-native-svg";
import { LoadIcon } from "./LoadIcon";

interface Props extends PathProps {}
export const AnimatedLoadIcon = (props: Props) => {
  const animatedRotate = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ rotate: `${animatedRotate.value}deg` }],
  }));

  useEffect(() => {
    animatedRotate.value = withRepeat(
      withTiming(360, { duration: 1000, easing: Easing.linear }),
      -1,
      false
    );
    return () => {
      animatedRotate.value = 0;
    };
  }, []);

  return (
    <Animated.View style={animatedStyles}>
      <LoadIcon {...props} />
    </Animated.View>
  );
};
