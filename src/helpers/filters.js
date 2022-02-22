export const filterIncludedLetters = (wordsList, includedLetters) => {
  if (includedLetters.length > 0) {
    let filteredList = wordsList;
    for (let index = 0; index < includedLetters.length; index++) {
      filteredList = filteredList.filter((i) => {
        return i.includes(includedLetters[index]);
      });
    }
    return filteredList;
  }
  return wordsList;
};

export const filterUnincludedLetters = (wordsList, unincludedLetters) => {
  if (unincludedLetters.length > 0) {
    let filteredList = wordsList;
    for (let index = 0; index < unincludedLetters.length; index++) {
      filteredList = filteredList.filter(
        (i) => !i.includes(unincludedLetters[index])
      );
    }
    return filteredList;
  }
  return wordsList;
};

export const filterCorrectPosition = (wordsList, correctPos) => {
  if (correctPos.length > 0) {
    let filteredList = wordsList;
    for (let index = 0; index < correctPos.length; index++) {
      filteredList = filteredList.filter((i) => {
        if (correctPos[index].value.length > 0) {
          return i[index] === correctPos[index].value;
        } else {
          return i[index];
        }
      });
    }
    return filteredList;
  }
  return wordsList;
};

export const filterIncorrectPosition = (wordsList, incorrectPos) => {
  if (incorrectPos.length > 0) {
    let filteredList = wordsList;
    for (let index = 0; index < incorrectPos.length; index++) {
      filteredList = filteredList.filter((i) => {
        if (incorrectPos[index].value.length > 0) {
          return i[index] !== incorrectPos[index].value;
        } else {
          return i[index];
        }
      });
    }
    return filteredList;
  }
  return wordsList;
};
