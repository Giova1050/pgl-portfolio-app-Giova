import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { scrolls } from "../data/Scrolls";

export type ScrollProps = {
  title: string;
};

const Scroll = ({ title }: ScrollProps) => {
  return (
    <View >
      <Text style={styles.cosasQmeGustanMuxoEstails}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cosasQmeGustanMuxoEstails: {
    borderColor: "black",
    borderWidth: 1,
    borderStyle: "dashed",
    padding: 20,
    color: "darkred",
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 16,
    backgroundColor: "silver",
  },
});

export default Scroll;

