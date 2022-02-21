import React, { useEffect, useState } from "react";
import "./Select.css";

export const Select = ({ handleCallback, handleIncorect }) => {
  const [correct, setCorrect] = useState([
    { name: "first", value: "", empty: true },
    { name: "second", value: "", empty: true },
    { name: "third", value: "", empty: true },
    { name: "fourth", value: "", empty: true },
    { name: "fifth", value: "", empty: true },
  ]);

  const [inCorrect, setInCorrect] = useState([
    { name: "first", value: "", empty: true },
    { name: "second", value: "", empty: true },
    { name: "third", value: "", empty: true },
    { name: "fourth", value: "", empty: true },
    { name: "fifth", value: "", empty: true },
  ]);

  const correctDependencies = [
    correct[0].value,
    correct[1].value,
    correct[2].value,
    correct[3].value,
    correct[4].value,
  ];

  useEffect(() => {
    handleCallback(correct);
  }, [correctDependencies]);

  const inCorrectDependencies = [
    inCorrect[0].value,
    inCorrect[1].value,
    inCorrect[2].value,
    inCorrect[3].value,
    inCorrect[4].value,
  ];

  useEffect(() => {
    handleIncorect(inCorrect);
  }, [inCorrectDependencies]);

  const pipeValue = (value, array, fn, name) => {
    if (value.match("^[А-ЩЬЮЯҐЄІЇа-щьюяґєії]*$") != null) {
      fn(
        array.map((i) =>
          i.name === name
            ? { ...i, value: value.toLowerCase(), empty: false }
            : i
        )
      );
    }
  };

  return (
    <>
      <span>Точно відома позиція</span>
      <form>
        {correct.map((i) => {
          const styled =
            i.value.length > 0
              ? "selectedInputs notEmptyCorrect"
              : "selectedInputs";
          return (
            <input
              key={i.name}
              className={styled}
              value={i.value.toUpperCase()}
              onChange={(event) =>
                pipeValue(event.target.value, correct, setCorrect, i.name)
              }
              maxLength="1"
            />
          );
        })}
      </form>
      <span>Точно не ця позиція</span>
      <form>
        {inCorrect.map((i) => {
          const styled =
            i.value.length > 0
              ? "selectedInputs notEmptyIncorrect"
              : "selectedInputs";
          return (
            <input
              key={i.name}
              className={styled}
              value={i.value.toUpperCase()}
              onChange={(event) =>
                pipeValue(event.target.value, inCorrect, setInCorrect, i.name)
              }
              maxLength="1"
            />
          );
        })}
      </form>
    </>
  );
};
