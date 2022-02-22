import React, { useEffect, useState } from "react";
import "./Select.css";

export const Select = ({ handleCallback, handleIncorect }) => {
  const [correct, setCorrect] = useState([
    { name: "first", value: "" },
    { name: "second", value: "" },
    { name: "third", value: "" },
    { name: "fourth", value: "" },
    { name: "fifth", value: "" },
  ]);

  const [inCorrect, setInCorrect] = useState([
    { name: "first", value: "" },
    { name: "second", value: "" },
    { name: "third", value: "" },
    { name: "fourth", value: "" },
    { name: "fifth", value: "" },
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
          i.name === name ? { ...i, value: value.toLowerCase() } : i
        )
      );
    }
  };

  return (
    <>
      <span>Точно відома позиція</span>
      <form className="selected-form">
        {correct.map((i) => {
          const styled =
            i.value.length > 0
              ? "selected-inputs notEmptyCorrect"
              : "selected-inputs";
          return (
            <input
              key={i.name}
              className={styled}
              value={i.value.toUpperCase()}
              type="text"
              onChange={(event) =>
                pipeValue(event.target.value, correct, setCorrect, i.name)
              }
              maxLength="1"
            />
          );
        })}
      </form>
      <span>Точно не ця позиція</span>
      <form className="selected-form">
        {inCorrect.map((i) => {
          const styled =
            i.value.length > 0
              ? "selected-inputs notEmptyIncorrect"
              : "selected-inputs";
          return (
            <input
              key={i.name}
              className={styled}
              value={i.value.toUpperCase()}
              type="text"
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
