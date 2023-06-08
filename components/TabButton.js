import { Pressable, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const TabButton = (props) => {
  const { name, accessibilityState, onPress } = props;
  const focused = accessibilityState.selected;

  console.log(focused && name);
  return (
    <Pressable onPress={onPress} style={({ pressed }) => pressed && styles}>
      <Ionicons name={name} size={42} color={focused ? "green" : "white"} />
    </Pressable>
  );
};

export default TabButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
