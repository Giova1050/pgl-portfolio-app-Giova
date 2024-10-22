import React from "react";
import { View, StyleSheet, Text, ImageSourcePropType, Image } from "react-native";
import { DARKTHEME, LIGHTTHEME } from "../styles/colors";

export type ScrollProps = {
  title: string;
  imgSource: ImageSourcePropType;
  themes: boolean;
};



const Scroll = ({ title, imgSource, themes }: ScrollProps) => {
  

  return (
    <View style={[styles.scrollContainerStyle,
       {backgroundColor: themes ? LIGHTTHEME.backgroundScroll : DARKTHEME.backgroundScroll} ]}>
      <Image
        style={styles.avatar}
        source={imgSource}
      />
      <Text style={[styles.text,
      {color: themes ? LIGHTTHEME.textScroll : DARKTHEME.textScroll}]}>{title}</Text>
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
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    marginTop: -32,
    marginBottom: -44.5
  }
});

export default Scroll;
