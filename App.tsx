import { useState } from "react";
import React from "react";
import {
  Button,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
} from "react-native";
import QRCode from "react-native-qrcode-svg";

import Card, { CardProps } from "./components/Card";
import { cards } from "./data/Cards";
import Scroll, {ScrollProps} from "./components/Scroll";
import { scrolls } from "./data/Scrolls";
import QrCode from "./components/QrCode";

export default function App() {
  const [displayMyQR, setDisplayMyQR] = useState(true);
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.firsttoprowContainer}>My Portfolio App</Text>
        <View style={styles.rowTopSecondContainer}>
          <Pressable
            style={styles.buttonruta}
            onPress={() => setDisplayMyQR(true)}
          >
            <Text
              style={{
                ...{
                  color: "white",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                },
                ...styles.shadoxboxing,
              }}
            >
              Mi info
            </Text>
          </Pressable>
          <Button
            onPress={() => setDisplayMyQR(false)}
            title="Mi Repo"
            color="light-gray"
            accessibilityLabel="Un botón pal QR"
          />
        </View>
      </View>
      {displayMyQR ? (
        <View style={styles.bodystails}>
          <View>
            <FlatList
              data={cards}
              renderItem={({ item }) => (
                <Card
                  title={item.title}
                  body={item.body}
                  imgSource={item.imgSource}
                />
              )}
            />
            <Text
              style={{
                color: "beriblak",
                fontWeight: "900",
                textTransform: "capitalize",
                fontSize: 20,
                textAlign: "center",
              }}
            >
              cosas que me gustan mucho:
            </Text>
            <FlatList
              data={scrolls}
              renderItem={({ item }) => (
                <Scroll
                  title={item.title}
                />
              )}
              keyExtractor={(item, index) => `${index}-${item.title}`}
            />
          </View>
        </View>
      ) : (
        <QrCode/>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  topContainer: {
    height: "15%",
    paddingTop: 50,
    width: "100%",
  },
  firsttoprowContainer: {
    backgroundColor: "gray",
    textAlign: "center",
    fontWeight: "bold",
    textAlignVertical: "center",
    fontSize: 30,
  },
  rowTopSecondContainer: {
    flexDirection: "row",
    backgroundColor: "darkgray",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonruta: {
    width: "50%",
  },
  bodystails: {
    width: "100%",
    borderWidth: 2,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "space-between",
    height: "85%",
  },
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
  CentrarcodigoQR: {
    justifyContent: "center",
    borderWidth: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  shadoxboxing: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },
});
