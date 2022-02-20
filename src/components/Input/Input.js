import React, { useEffect, useState } from "react";

export const Input = ({ handleInput, handleSecondInput }) => {
  const [value, setValue] = useState("");
  const [secondInput, setsecondInput] = useState("");

  /* const sortedOne = Array.from(value);
  const sortedTwo = Array.from(secondInput);

  const contained = sortedOne.some(
    (el) => el === sortedTwo[sortedTwo.length - 1]
  ); */

  useEffect(() => {
    handleInput(value.toLowerCase());
  }, [value.length]);

  useEffect(() => {
    handleSecondInput(secondInput.toLowerCase());
  }, [secondInput.length]);

  return (
    <>
      <form action="">
        <label htmlFor="included">Букви які є: </label>
        <input
          type="text"
          id="included"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </form>

      <form action="">
        <label htmlFor="unincluded">Букви яких немає: </label>
        <input
          type="text"
          id="unincluded"
          value={secondInput}
          onChange={(event) => setsecondInput(event.target.value)}
        />
      </form>
    </>
  );
};
