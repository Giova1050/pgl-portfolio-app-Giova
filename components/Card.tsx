import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";

export type CardProps = {
    title: string;
    body: string;
    imgSource: ImageSourcePropType;
  };

const Card = ({title, body, imgSource}: CardProps) => {
  return (
    <View style={styles.cardContainer}>
      <Image
        style={styles.avatar}
        source={imgSource}
      />
      <View style={styles.card}>
        <Text style={styles.textStyle}>{title}</Text>
        <Text>
          {body}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18
  },
  card: {
    margin: 10,
    backgroundColor: "lightgray",
    padding: 10,
    borderRadius: 10,
    width: "70%",
  },
  avatar: {
    height: 90,
    width: 90,
    borderRadius: 100
  },
  textStyle: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: 20,
  },
});

export default Card;
