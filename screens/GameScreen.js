import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import styles from "../styles";
import apiKey from "../apiKey";

export default function GameScreen() {
  [word, setWord] = useState("");
  [definition, setDefinition] = useState("");
  [scrambledWord, setScrambledWord] = useState("");
  [counter, setCounter] = useState(20);
  [wordLength, setWordLength] = useState(5);

  function getData(length) {
    fetch(
      `http://api.wordnik.com:80/v4/words.json/randomWords?hasDictionaryDef=true&minCorpusCount=20&minLength=${length}&maxLength=5&limit=1&api_key=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        const scrambledWord = data[0].word
          .split("")
          .sort(() => 0.5 - Math.random())
          .join("")
          .toLowerCase();
        setWord(data[0].word);
        setScrambledWord(scrambledWord);
      })

      .then(() => {
        fetch(
          `https://api.wordnik.com/v4/word.json/${word}/definitions?limit=1&includeRelated=false&useCanonical=false&includeTags=false&api_key=${apiKey}`
        )
          .then((response) => response.json())
          .then((definition) => {
            const filteredDefinition = definition[0].text.replace(
              / \([\s\S]*?\)/g
            );
            setDefinition(filteredDefinition);
          });
      });
  }

  React.useEffect(() => {
    getData(wordLength);
  }, []);

  React.useEffect(() => {
    let timer = null;
    if (counter === 1) {
      timer = setInterval(() => setCounter("Out of time!"), 1000);
    } else if (counter === "Out of time!") {
      timer = setInterval(() => setCounter(20), 1000);
    } else {
      timer = setInterval(() => setCounter(counter - 1), 1000);
    }

    return () => clearInterval(timer);
  }, [counter]);

  return (
    <View style={styles.container}>
      <Text>{counter}</Text>
      <Text style={styles.anagram}>{scrambledWord}</Text>
      <Text>{definition}</Text>
      <TextInput placeholder={"answer here"} style={styles.answerTextBox} />
      <TouchableOpacity style={styles.answerButton}>
        <Text style={styles.answerButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}
