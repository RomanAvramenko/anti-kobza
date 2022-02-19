import { validWords } from "./words";
import { useEffect, useState } from "react";
import { Select } from "./components/Select/Select";
import { Input } from "./components/Input/Input";
import { Pagination } from "./components/Pagination/Pagination";
import "./App.css";

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

  const filteredArray = (array, incArr, unInclArr, corPosit, incorPosit) => {
    if (incArr.length < 1 && unInclArr.length < 1) {
      return array;
    }

    for (let index = 0; index < incArr.length; index++) {
      array = array.filter((i) => i.includes(incArr[index]));
    }

    for (let index = 0; index < corPosit.length; index++) {
      array = array.filter((i) => {
        if (corPosit[index].length > 0) {
          return i[index] === corPosit[index];
        } else {
          return i[index];
        }
      });
    }

    for (let index = 0; index < incorPosit.length; index++) {
      array = array.filter((i) => {
        if (incorPosit[index].length > 0) {
          return i[index] !== incorPosit[index];
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

  const dependencyes = [
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
    const filterArr = filteredArray(
      validWords,
      include,
      notInclude,
      correctPosition,
      incorrectPosition
    );
    setFiltered(filterArr);
  }, dependencyes);

  return (
    <div className="App">
      <Input handleInput={handleInput} handleSecondInput={handleSecondInput} />
      <Select handleCallback={handleCallback} handleIncorect={handleIncorect} />
      <Pagination itemsPerPage={40} items={filtered} />
    </div>
  );
}

export default App;
