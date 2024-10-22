import React from "react";
import { View, StyleSheet, Image } from "react-native";
import QRCode from "react-native-qrcode-svg";

export type QrProps = {
  themes: boolean
}

const QrCode = ({ themes }: QrProps) => {
  return (
    <View style={styles.bodystyle}>
      <View style={styles.QRCenter}>
        <QRCode value="https://github.com/Giova1050" />
        <Image style={styles.img} source={themes ? require("../assets/img/FurinaQR.png") : require("../assets/img/HutaoB.png")}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  QRCenter: {
    justifyContent: "center",
    borderWidth: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  bodystyle: {
    width: "100%",
    borderWidth: 2,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "space-between",
    height: "85%",
  },
  img: {
    marginBottom: -280,
    width: 390,
    height: 390
  }
});

export default QrCode;
