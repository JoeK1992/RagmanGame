import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00FFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    fontSize: 50,
    color: "#e6940b",
  },
  buttonText: {
    fontSize: 60,
    textAlign: "center",
    marginTop: 15,
  },
  button: {
    backgroundColor: "#1a759f",
    width: 150,
    height: 110,
    padding: 5,
    fontFamily: "Nunito_600SemiBold",
    marginTop: 40,
    borderRadius: 60,
  },
  image: {
    height: 150,
    width: 300,
    marginTop: 60,
  },
  textBox: {
    marginTop: 30,
    backgroundColor: "#e6940b",
    height: 50,
    width: 180,
    textAlign: "center",
    fontSize: 20,
  },
  errorText: {
    marginTop: 20,
  },
  beginGameText: {
    fontSize: 50,
  },
  countdown: {
    fontSize: 100,
    marginTop: 90,
    textAlign: "center",
  },
  answerButtonText: {
    fontSize: 30,
    textAlign: "center",
    marginTop: 15,
  },
  answerButton: {
    backgroundColor: "#1a759f",
    width: 150,
    height: 80,
    padding: 5,
    fontFamily: "Nunito_600SemiBold",
    marginTop: 80,
    borderRadius: 60,
  },
  anagram: {
    fontSize: 40,
  },
  answerTextBox: {
    marginTop: 160,
    backgroundColor: "#e6940b",
    height: 50,
    width: 180,
    textAlign: "center",
    fontSize: 20,
  },
});

export default styles;
