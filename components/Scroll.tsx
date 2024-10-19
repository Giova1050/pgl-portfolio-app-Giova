import React from "react";
import { View, ScrollView, StyleSheet, FlatList, Text } from "react-native";

export type ScrollProps = {
  title: string;
};

const Scroll = ({ title }: ScrollProps) => {
  return (
    <View style={styles.cosasQmeGustanMuxoEstails}>
        <Text>
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

/**
 * <ScrollView style={{ padding: 10 }}>
              <Text style={styles.cosasQmeGustanMuxoEstails}>
                Salir a pasear
              </Text>
              <Text style={styles.cosasQmeGustanMuxoEstails}>Senderismo</Text>
              <Text style={styles.cosasQmeGustanMuxoEstails}>
                Ir a la playita
              </Text>
              <Text style={styles.cosasQmeGustanMuxoEstails}>
                Domingos de misa
              </Text>
              <Text style={styles.cosasQmeGustanMuxoEstails}>
                La guitarrita
              </Text>
              <Text style={styles.cosasQmeGustanMuxoEstails}>
                El monte con lluvia
              </Text>
              <Text style={styles.cosasQmeGustanMuxoEstails}>Viajar</Text>
              <Text style={styles.cosasQmeGustanMuxoEstails}>
                Música variadita
              </Text>
              <Text style={styles.cosasQmeGustanMuxoEstails}>Anime</Text>
              <Text style={styles.cosasQmeGustanMuxoEstails}>Ducharme</Text>
              <Text style={styles.cosasQmeGustanMuxoEstails}>Videojuegos</Text>
              <Text style={styles.cosasQmeGustanMuxoEstails}>
                Ir de cenar romántica
              </Text>
            </ScrollView>
 */
