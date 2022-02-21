import React, { useEffect, useState } from "react";
import "./Select.css";

export const Select = ({ handleCallback, handleIncorect }) => {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [third, setThird] = useState("");
  const [fourth, setFourth] = useState("");
  const [fifth, setFifth] = useState("");

  const [one, setOne] = useState("");
  const [two, setTwo] = useState("");
  const [three, setThree] = useState("");
  const [four, setFour] = useState("");
  const [five, setFive] = useState("");

  useEffect(() => {
    handleCallback([
      first.toLowerCase(),
      second.toLowerCase(),
      third.toLowerCase(),
      fourth.toLowerCase(),
      fifth.toLowerCase(),
    ]);
  }, [first, second, third, fourth, fifth]);

  useEffect(() => {
    handleIncorect([
      one.toLowerCase(),
      two.toLowerCase(),
      three.toLowerCase(),
      four.toLowerCase(),
      five.toLowerCase(),
    ]);
  }, [one, two, three, four, five]);

  const pipeValue = (value, fn) => {
    if (value.match("^[А-ЩЬЮЯҐЄІЇа-щьюяґєії]*$") != null) {
      fn(value.substring(0, 1).toLowerCase());
    }
  };

  return (
    <>
      <span>Точно відома позиція</span>
      <form>
        <input
          className="selectedInputs"
          name="input1"
          value={first}
          onChange={(event) => pipeValue(event.target.value, setFirst)}
          maxLength="1"
        />

        <input
          className="selectedInputs"
          name="input2"
          value={second}
          onChange={(event) => pipeValue(event.target.value, setSecond)}
          maxLength="1"
        />

        <input
          className="selectedInputs"
          name="input3"
          value={third}
          onChange={(event) => pipeValue(event.target.value, setThird)}
          maxLength="1"
        />

        <input
          className="selectedInputs"
          name="input4"
          value={fourth}
          onChange={(event) => pipeValue(event.target.value, setFourth)}
          maxLength="1"
        />

        <input
          className="selectedInputs"
          name="input5"
          value={fifth}
          onChange={(event) => pipeValue(event.target.value, setFifth)}
          maxLength="1"
        />
      </form>
      <span>Точно не ця позиція</span>
      <form>
        <input
          className="selectedInputs"
          name="1"
          value={one}
          onChange={(event) => pipeValue(event.target.value, setOne)}
          maxLength="1"
        />

        <input
          className="selectedInputs"
          name="2"
          value={two}
          onChange={(event) => pipeValue(event.target.value, setTwo)}
          maxLength="1"
        />

        <input
          className="selectedInputs"
          name="3"
          value={three}
          onChange={(event) => pipeValue(event.target.value, setThree)}
          maxLength="1"
        />

        <input
          className="selectedInputs"
          name="4"
          value={four}
          onChange={(event) => pipeValue(event.target.value, setFour)}
          maxLength="1"
        />

        <input
          className="selectedInputs"
          name="5"
          value={five}
          onChange={(event) => pipeValue(event.target.value, setFive)}
          maxLength="1"
        />
      </form>
    </>
  );
};
