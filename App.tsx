import { useState } from "react";
import React from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  FlatList,
  Switch,
  useColorScheme,
  ColorSchemeName,
} from "react-native";
import Card, { CardProps } from "./components/Card";
import { cards } from "./data/Cards";
import Scroll, { ScrollProps } from "./components/Scroll";
import { scrolls } from "./data/Scrolls";
import QrCode from "./components/QrCode";
import { LIGHTTHEME } from "./styles/colors";

export default function App() {
  const [displayMyQR, setDisplayMyQR] = useState(true);



  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.firsttoprowContainer}>Mi Portfolio App</Text>
        <View style={styles.rowTopSecondContainer}>
          <Pressable
            style={styles.buttomPath}
            onPress={() => setDisplayMyQR(true)}
          >
            <Text style={styles.textStyle1}>Mi Info</Text>
          </Pressable>
          <Pressable
            onPress={() => setDisplayMyQR(false)}>
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
            <Text style={{textAlign: "center"}}>Modo Claro/Oscuro</Text>
            <Switch style={{alignSelf: "center"}} value={true} onChange={() => {}}/>
            <Text style={styles.textStyle3}>
              cosas que me gustan mucho:
            </Text>
            <FlatList
              data={scrolls}
              renderItem={({ item }) => <Scroll title={item.title} imgSource={item.imgSource} />}
              keyExtractor={(item, index) => `${index}-${item.title}`}
            />
          </View>
        </View>
      ) : (
        <QrCode />
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
    backgroundColor: LIGHTTHEME.firsttoprowContainer,
    textAlign: "center",
    fontWeight: "bold",
    textAlignVertical: "center",
    fontSize: 30,
  },
  rowTopSecondContainer: {
    flexDirection: "row",
    backgroundColor: LIGHTTHEME.rowTopSecondContainer,
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
