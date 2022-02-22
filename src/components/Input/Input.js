import React, { useEffect, useState } from "react";
import "./Input.css";

export const Input = ({ handleInput, handleSecondInput }) => {
  const [included, setIncluded] = useState("");
  const [secondInput, setUnincluded] = useState("");

  useEffect(() => {
    handleInput(included.toLowerCase());
  }, [included.length]);

  useEffect(() => {
    handleSecondInput(secondInput.toLowerCase());
  }, [secondInput.length]);

  const handleIncludedLetters = (e) => {
    e.preventDefault();
    if (e.target.value.match("^[А-ЩЬЮЯҐЄІЇа-щьюяґєії]*$") != null) {
      setIncluded(e.target.value);
    }
  };

  const handleUnincludedLetters = (e) => {
    e.preventDefault();
    if (e.target.value.match("^[А-ЩЬЮЯҐЄІЇа-щьюяґєії]*$") != null) {
      setUnincluded(e.target.value);
    }
  };

  return (
    <>
      <span>Букви які є</span>
      <form>
        <input
          className="textInputs"
          type="text"
          id="included"
          value={included.toUpperCase()}
          onChange={handleIncludedLetters}
          onKeyPress={(e) => e.key === "Enter" && e.preventDefault()}
        />
      </form>
      <span>Букви яких немає</span>
      <form>
        <input
          className="textInputs"
          type="text"
          id="unincluded"
          value={secondInput.toUpperCase()}
          onChange={handleUnincludedLetters}
          onKeyPress={(e) => e.key === "Enter" && e.preventDefault()}
        />
      </form>
    </>
  );
};
