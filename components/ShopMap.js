import React, { useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";

const { height, width } = Dimensions.get("screen");

const ShopMap = () => {
  const [mapRegion, setMapRegion] = useState({
    latitude: 53.345982079069586,
    longitude: -6.262565186207204,
    latitudeDelta: 0.02,
    longitudeDelta: 0.02,
  });

  const candyLabs = {
    latitude: 53.34526677333358,
    longitude: -6.263425261314104,
  };

  const candyCo = {
    latitude: 53.33647729377181,
    longitude: -6.256999236569824,
  };

  return (
    <View style={styles.container}>
      <MapView style={StyleSheet.absoluteFill} initialRegion={mapRegion}>
        <Marker coordinate={mapRegion} title="Aunt Nellies" />
        <Marker coordinate={candyLabs} title="Candy Labs" />
        <Marker coordinate={candyCo} title="Candy Co" />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: height / 1.5,
    borderWidth: 2,
    borderColor: "pink",
    borderRadius: 10,
    overflow: "hidden",
  },
  map: {
    flex: 1,
  },
});

export default ShopMap;
