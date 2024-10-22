import React from "react";
import { View, StyleSheet, Text, ImageSourcePropType, Image } from "react-native";
import { LIGHTTHEME } from "../styles/colors";

export type ScrollProps = {
  title: string;
  imgSource: ImageSourcePropType;
};

const Scroll = ({ title, imgSource }: ScrollProps) => {
  return (
    <View style={styles.scrollContainerStyle}>
      <Image
        style={styles.avatar}
        source={imgSource}
      />
      <Text style={styles.text}>{title}</Text>
      <Image
        style={styles.reversedAvatar}
        source={imgSource}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  scrollContainerStyle: {
    borderColor: "black",
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: LIGHTTHEME.backgroundScroll,
  },
  avatar: {
    marginTop: 12,
    height: 60,
    width: 60,
    borderRadius: 100
  },
  reversedAvatar: {
    alignSelf: "flex-end",
    marginBottom: 20,
    height: 60,
    width: 60,
    borderRadius: 100,
  },
  text: {
    fontSize: 16,
    color: LIGHTTHEME.textScroll,
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    marginTop: -32,
    marginBottom: -44.5
  }
});

export default Scroll;
