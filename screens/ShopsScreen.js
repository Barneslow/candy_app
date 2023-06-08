import { LinearGradient } from "expo-linear-gradient";
import { ImageBackground, View, StyleSheet } from "react-native";

import backgroundImage from "../assets/candy-background.jpg";
import ShopMap from "../components/ShopMap";

const ShopScreen = () => {
  return (
    <ImageBackground style={styles.background} source={backgroundImage}>
      <LinearGradient
        colors={["rgba(255, 182, 193, .1)", "rgba(255, 182, 193, .5)"]}
        style={styles.background}
      >
        <View style={styles.background}>
          <ShopMap />
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

export default ShopScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
    gap: 4,
  },

  text: {
    fontSize: 20,
    color: "white",
    marginVertical: 10,
  },

  background: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
