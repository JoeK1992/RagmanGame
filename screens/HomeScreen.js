import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Text, TextInput, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles";

export default function HomeScreen() {
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [error, setError] = useState(false);

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
      {error && <Text style={styles.errorText}>Please enter your name</Text>}
      <TextInput
        placeholder={"enter your name..."}
        style={styles.textBox}
        onChangeText={(name) => setName(name)}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={
          name.length < 2
            ? () => {
                setError(true);
              }
            : () => {
                navigation.navigate("Countdown", { playerName: name });
              }
        }
      >
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
    </View>
  );
}
