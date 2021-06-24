import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Text, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles";

function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Welcome to the Anagram Game!</Text>
      <Image
        source={{
          uri:
            "https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/f_auto,q_auto,w_1100/v1555921534/shape/mentalfloss/istock_000020173946_small_0.jpg",
        }}
        style={styles.image}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("Game");
        }}
      >
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
    </View>
  );
}

export default HomeScreen;
