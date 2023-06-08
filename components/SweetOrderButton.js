import { Pressable, Text, StyleSheet, Image } from "react-native";

const SweetButton = ({ onPress, title, textStyle, source }) => {
  return (
    <Pressable
      style={({ pressed }) =>
        pressed ? [styles.button, { opacity: 0.7 }] : styles.button
      }
      onPress={() => onPress(title)}
    >
      <Text style={[styles.text, textStyle]}>{title}</Text>
      <Image style={styles.image} source={source}></Image>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "rgba(3, 138, 255, 1)",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  text: {
    color: "white",
    fontSize: 16,
  },
  image: {
    height: 50,
    width: 50,
  },
});

export default SweetButton;
