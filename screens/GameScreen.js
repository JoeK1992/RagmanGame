import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import styles from "../styles";
import apiKey from "../apiKey";

class GameScreen extends React.Component {
  state = {
    word: "",
    definition: "",
    scrambledWord: "",
  };

  getData(length) {
    fetch(
      `http://api.wordnik.com:80/v4/words.json/randomWords?hasDictionaryDef=true&minCorpusCount=20&minLength=${length}&maxLength=5&limit=1&api_key=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        const scrambledWord = data[0].word
          .split("")
          .sort(() => 0.5 - Math.random())
          .join("");
        this.setState({ word: data[0].word, scrambledWord: scrambledWord });
      })

      .then(() => {
        fetch(
          `https://api.wordnik.com/v4/word.json/${this.state.word}/definitions?limit=1&includeRelated=false&useCanonical=false&includeTags=false&api_key=${apiKey}`
        )
          .then((response) => response.json())
          .then((definition) => {
            const filteredDefinition = definition[0].text.replace(
              / \([\s\S]*?\)/g
            );

            this.setState({ definition: filteredDefinition });
          });
      });
  }

  componentDidMount() {
    this.getData(5);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.scrambledWord}</Text>
        <Text>{this.state.definition}</Text>
      </View>
    );
  }
}

export default GameScreen;
