export const getWord = (length) => {
  fetch(
    `http://api.wordnik.com:80/v4/words.json/randomWords?hasDictionaryDef=true&minCorpusCount=10&minLength=${length}&maxLength=10&limit=1&api_key=boep5w3lo5v6ub5210oyfwyxqnfmma7wkbc9ty8258d56zzig`
  )
    .then((response) => response.json())
    .then((data) => console.log(data));
};

export const getDefinition = (word) => {
  fetch(
    `https://api.wordnik.com/v4/word.json/${word}/definitions?limit=1&includeRelated=false&useCanonical=false&includeTags=false&api_key=boep5w3lo5v6ub5210oyfwyxqnfmma7wkbc9ty8258d56zzig`
  )
    .then((response) => response.json())
    .then((data) => console.log(data[0].text));
};
