import { validWords } from "./words";
import { useEffect, useState } from "react";
import { Select } from "./components/Select/Select";
import { Input } from "./components/Input/Input";
import { Pagination } from "./components/Pagination/Pagination";
import "./App.css";
import {
  filterCorrectPosition,
  filterIncludedLetters,
  filterIncorrectPosition,
  filterUnincludedLetters,
} from "./helpers/filters";

function App() {
  const [included, setIncluded] = useState("");
  const [unincluded, setUnincluded] = useState("");
  const [correctPosition, setCorrectPosition] = useState([]);
  const [incorrectPosition, setIncorrectPosition] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const include = Array.from(included);
  const notInclude = Array.from(unincluded);

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
    setIncorrectPosition(item);
  };

  const dependencyes = [
    validWords,
    include.length,
    notInclude.length,
    correctPosition[0],
    correctPosition[1],
    correctPosition[2],
    correctPosition[3],
    correctPosition[4],
    incorrectPosition[0],
    incorrectPosition[1],
    incorrectPosition[2],
    incorrectPosition[3],
    incorrectPosition[4],
  ];

  useEffect(() => {
    let filterArr = validWords;
    filterArr = filterIncludedLetters(filterArr, include);
    filterArr = filterUnincludedLetters(filterArr, notInclude);
    filterArr = filterCorrectPosition(filterArr, correctPosition);
    filterArr = filterIncorrectPosition(filterArr, incorrectPosition);
    if (filterArr) {
      setFiltered(filterArr);
    }
  }, dependencyes);

  return (
    <div className="App">
      <Input handleInput={handleInput} handleSecondInput={handleSecondInput} />
      <Select handleCallback={handleCallback} handleIncorect={handleIncorect} />
      <Pagination itemsPerPage={45} items={filtered} />
    </div>
  );
}

export default App;
