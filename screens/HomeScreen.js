import { LinearGradient } from "expo-linear-gradient";
import { ImageBackground, Text, View, StyleSheet } from "react-native";

import backgroundImage from "../assets/candy-background.jpg";
import SweetButton from "../components/SweetOrderButton";

import sweetImage from "../assets/sweets.png";
import chocolateImage from "../assets/chocolate.png";
import iceCreamImage from "../assets/ice-cream.png";

const HomeScreen = () => {
  function pressHandler(choice) {}
  return (
    <View style={styles.background}>
      <ImageBackground style={styles.background} source={backgroundImage}>
        <LinearGradient
          colors={["rgba(255, 182, 193, .1)", "rgba(255, 182, 193, .5)"]}
          style={styles.background}
        >
          <Text style={styles.text}>Darrach Is A loser</Text>
          <View style={styles.buttonContainer}>
            <SweetButton
              title={"Chocolate"}
              source={sweetImage}
              onPress={pressHandler}
            />
            <SweetButton
              title={"Sweets"}
              source={chocolateImage}
              onPress={pressHandler}
            />
            <SweetButton
              title={"Ice Cream"}
              source={iceCreamImage}
              onPress={pressHandler}
            />
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
    gap: 4,
  },

  buttonContainer: {
    display: "flex",
    gap: 10,
  },

  text: {
    fontSize: 20,
    color: "black",
    fontWeight: 900,
    marginVertical: 10,
  },

  background: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
