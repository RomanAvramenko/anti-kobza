import React, { useState } from "react";
import { letters } from "../../letters";

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

  const handleSelect = () => {
    handleCallback([first, second, third, fourth, fifth]);
  };

  const handleIncorrectSelect = () => {
    handleIncorect([one, two, three, four, five]);
  };

  return (
    <>
      <div>
        <span>Точно відома позиція: </span>
        <select
          name="select1"
          value={first}
          onChange={(event) => setFirst(event.target.value)}
        >
          {letters.map((i) => (
            <option value={i} key={i}>
              {i}
            </option>
          ))}
        </select>

        <select
          name="select2"
          value={second}
          onChange={(event) => setSecond(event.target.value)}
        >
          {letters.map((i) => (
            <option value={i} key={i}>
              {i}
            </option>
          ))}
        </select>

        <select
          name="select3"
          value={third}
          onChange={(event) => setThird(event.target.value)}
        >
          {letters.map((i) => (
            <option value={i} key={i}>
              {i}
            </option>
          ))}
        </select>

        <select
          name="select4"
          value={fourth}
          onChange={(event) => setFourth(event.target.value)}
        >
          {letters.map((i) => (
            <option value={i} key={i}>
              {i}
            </option>
          ))}
        </select>

        <select
          name="select5"
          value={fifth}
          onChange={(event) => setFifth(event.target.value)}
        >
          {letters.map((i) => (
            <option value={i} key={i}>
              {i}
            </option>
          ))}
        </select>
        <input type="button" value="додати" onClick={handleSelect} />
      </div>
      <div>
        <span>Точно не ця позиція: </span>
        <select
          name="1"
          value={one}
          onChange={(event) => setOne(event.target.value)}
        >
          {letters.map((i) => (
            <option value={i} key={i}>
              {i}
            </option>
          ))}
        </select>

        <select
          name="2"
          value={two}
          onChange={(event) => setTwo(event.target.value)}
        >
          {letters.map((i) => (
            <option value={i} key={i}>
              {i}
            </option>
          ))}
        </select>

        <select
          name="3"
          value={three}
          onChange={(event) => setThree(event.target.value)}
        >
          {letters.map((i) => (
            <option value={i} key={i}>
              {i}
            </option>
          ))}
        </select>

        <select
          name="4"
          value={four}
          onChange={(event) => setFour(event.target.value)}
        >
          {letters.map((i) => (
            <option value={i} key={i}>
              {i}
            </option>
          ))}
        </select>

        <select
          name="5"
          value={five}
          onChange={(event) => setFive(event.target.value)}
        >
          {letters.map((i) => (
            <option value={i} key={i}>
              {i}
            </option>
          ))}
        </select>
        <input type="button" value="додати" onClick={handleIncorrectSelect} />
      </div>
    </>
  );
};
