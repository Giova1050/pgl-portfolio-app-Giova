import { useState } from "react";
import React from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  FlatList,
  Switch,
} from "react-native";
import Card, { CardProps } from "./components/Card";
import { cards } from "./data/Cards";
import Scroll, { ScrollProps } from "./components/Scroll";
import { scrolls } from "./data/Scrolls";
import QrCode from "./components/QrCode";
import { LIGHTTHEME, DARKTHEME } from "./styles/colors";

export default function App() {
  const [displayMyQR, setDisplayMyQR] = useState(true);
  const [themes, setThemes] = useState(true);

  return (
    <View style={[styles.container,
      {backgroundColor: themes ? LIGHTTHEME.backgroundContainer : DARKTHEME.backgroundContainer}]}>
      <View style={styles.topContainer}>
        <Text style={[styles.firsttoprowContainer,
        { backgroundColor: themes ? LIGHTTHEME.firsttoprowContainer : DARKTHEME.firsttoprowContainer}]}>Mi Portfolio App</Text>
        <View style={[styles.rowTopSecondContainer, 
        { backgroundColor: themes ? LIGHTTHEME.rowTopSecondContainer: DARKTHEME.rowTopSecondContainer}]}>
          <Pressable
            style={styles.buttomPath}
            onPress={() => setDisplayMyQR(true)}
          >
            <Text style={styles.textStyle1}>Mi Info</Text>
          </Pressable>
          <Pressable onPress={() => setDisplayMyQR(false)}>
            <Text style={styles.textStyle2}>Mi Repo</Text>
          </Pressable>
        </View>
      </View>
      {displayMyQR ? (
        <View style={styles.bodystyle}>
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
            <Text style={{ textAlign: "center" }}>Modo Claro/Oscuro</Text>
            <Switch
              style={{ alignSelf: "center" }}
              value={themes}
              onChange={() => setThemes(!themes)}
            />
            <Text style={styles.textStyle3}>cosas que me gustan mucho:</Text>
            <FlatList
              data={scrolls}
              renderItem={({ item }) => (
                <Scroll title={item.title} imgSource={item.imgSource} themes={themes} />
              )}
              keyExtractor={(item, index) => `${index}-${item.title}`}
            />
          </View>
        </View>
      ) : (
        <QrCode themes={themes} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  topContainer: {
    height: "15%",
    paddingTop: 50,
    width: "100%",
  },
  firsttoprowContainer: {
    textAlign: "center",
    fontWeight: "bold",
    textAlignVertical: "center",
    fontSize: 30,
  },
  rowTopSecondContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttomPath: {
    padding: 12,
    flex: 0.5,
  },
  textStyle1: {
    color: "black",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  textStyle2: {
    color: "black",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  textStyle3: {
    color: "black",
    fontWeight: "900",
    textTransform: "capitalize",
    fontSize: 20,
    textAlign: "center",
  },
  bodystyle: {
    width: "100%",
    borderWidth: 2,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "space-between",
    height: "85%",
  },
});
