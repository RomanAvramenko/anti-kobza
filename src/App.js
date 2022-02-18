import { validWords } from "./words";
import { useState } from "react";
import "./App.css";
import { Select } from "./components/Select/Select";
import { Input } from "./components/Input/Input";

function App() {
  const [included, setIncluded] = useState("");
  const [unincluded, setUnincluded] = useState("");
  const [correctPosition, setCorrectPosition] = useState([]);
  const [incorrectPosition, setIncorrectPosition] = useState([]);

  let include = Array.from(included);
  let notInclude = Array.from(unincluded);

  const handleInput = (value) => {
    setIncluded(value);
  };

  const handleSecondInput = (value) => {
    setUnincluded(value);
  };

  const handleCallback = (item) => {
    setCorrectPosition(item);
  };

  const handleIncorect = (item) => {
    setIncorrectPosition(item)
  }

  const filteredArray = (array, incArr, unInclArr) => {
    if (incArr.length < 1 || unInclArr.length < 1) {
      return array;
    }

    for (let index = 0; index < incArr.length; index++) {
      array = array.filter((i) => i.includes(incArr[index]));
    }

    for (let index = 0; index < correctPosition.length; index++) {
      array = array.filter((i) => {
        if (correctPosition[index].length > 0) {
          return i[index] === correctPosition[index];
        } else {
          return i[index];
        }
      });
    }

    for (let index = 0; index < incorrectPosition.length; index++) {
      array = array.filter((i) => {
        if (incorrectPosition[index].length > 0) {
          return i[index] !== incorrectPosition[index];
        } else {
          return i[index];
        }
      });
    }

    for (let index = 0; index < unInclArr.length; index++) {
      array = array.filter((i) => !i.includes(unInclArr[index]));
    }

    return array;
  };

  const array = filteredArray(validWords, include, notInclude);

  return (
    <div className="App">
      <Input handleInput={handleInput} handleSecondInput={handleSecondInput} />
      <Select handleCallback={handleCallback} handleIncorect={handleIncorect}/>
      <ol>
        {array.map((i) => (
          <li key={Math.random()}>{i}</li>
        ))}
      </ol>
    </div>
  );
}

export default App;
