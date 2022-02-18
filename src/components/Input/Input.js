import React, { useState } from "react";

export const Input = ({ handleInput, handleSecondInput }) => {
  const [value, setValue] = useState("");
  const [secondInput, setsecondInput] = useState("");
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
          onClick={() => handleInput(value)}
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
          onClick={() => handleSecondInput(secondInput)}
        />
      </form>
    </>
  );
};
