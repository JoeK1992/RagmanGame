import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "../styles";

function GameScreen(props) {
  const { playerName } = props.route.params;
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.beginGameText}>Good luck {playerName}!</Text>
      </TouchableOpacity>
    </View>
  );
}

export default GameScreen;
