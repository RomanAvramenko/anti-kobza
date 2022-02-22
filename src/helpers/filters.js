export const filterIncludedLetters = (wordsList, includedLetters) => {
  if (includedLetters.length > 0) {
    for (let index = 0; index < includedLetters.length; index++) {
      return wordsList.filter((i) => i.includes(includedLetters[index]));
    }
  }
  return wordsList;
};

export const filterUnincludedLetters = (wordsList, unincludedLetters) => {
  if (unincludedLetters.length > 0) {
    for (let index = 0; index < unincludedLetters.length; index++) {
      return wordsList.filter((i) => !i.includes(unincludedLetters[index]));
    }
  }
  return wordsList;
};

export const filterCorrectPosition = (wordsList, correctPos) => {
  if (correctPos.length > 0) {
    for (let index = 0; index < correctPos.length; index++) {
      return wordsList.filter((i) => {
        if (correctPos[index].value.length > 0) {
          return i[index] === correctPos[index].value;
        } else {
          return i[index];
        }
      });
    }
  }
  return wordsList;
};

export const filterIncorrectPosition = (wordsList, incorrectPos) => {
  if (incorrectPos.length > 0) {
    for (let index = 0; index < incorrectPos.length; index++) {
      return wordsList.filter((i) => {
        if (incorrectPos[index].value.length > 0) {
          return i[index] !== incorrectPos[index].value;
        } else {
          return i[index];
        }
      });
    }
  }
};
