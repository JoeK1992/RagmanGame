import React, { useState } from "react";
import { Text, View } from "react-native";
import styles from "../styles";
import { useNavigation } from "@react-navigation/native";

export default function CountdownScreen(props) {
  const navigation = useNavigation();
  const { playerName } = props.route.params;

  const [counter, setCounter] = useState(5);

  React.useEffect(() => {
    if (counter === 1) {
      setInterval(() => setCounter("Go!"), 1000);
    }
    const timer =
      counter === "Go!"
        ? setInterval(() => navigation.navigate("Game", { playerName }), 1000)
        : setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <View style={styles.container}>
      <Text style={styles.beginGameText}>Good luck {playerName}!</Text>
      <Text style={styles.countdown}>{counter}</Text>
    </View>
  );
}
