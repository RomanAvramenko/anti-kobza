import React, { useState } from "react";

export const Input = ({ handleInput, handleSecondInput }) => {
  const [value, setValue] = useState("");
  const [secondInput, setsecondInput] = useState("");

  const sortedOne = Array.from(value);
  const sortedTwo = Array.from(secondInput);

  const contained = sortedOne.some(
    (el) => el === sortedTwo[sortedTwo.length - 1]
  );

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
        <input
          type="button"
          value="додати"
          disabled={value.length < 1}
          onClick={() => handleInput(value.toLowerCase())}
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
        <input
          type="button"
          value="додати"
          disabled={secondInput.length < 1 || contained}
          onClick={() => handleSecondInput(secondInput.toLowerCase())}
        />
      </form>
    </>
  );
};
