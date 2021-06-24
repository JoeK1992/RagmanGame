import React, { useState } from "react";
import { Text, View } from "react-native";
import styles from "../styles";

export default function CountdownScreen(props) {
  const { playerName } = props.route.params;

  const [counter, setCounter] = useState(5);

  React.useEffect(() => {
    const timer =
      counter === 0
        ? navigation.navigate("Game", { playerName })
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
