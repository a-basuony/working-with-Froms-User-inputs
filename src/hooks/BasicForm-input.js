import React, { useState } from "react";

export default function useInputForm(validateValue) {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const InputIsValid = validateValue(enteredValue);
  const InputIsInvalid = !InputIsValid && isTouched;

  const inputValueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const InputBlurHandler = (event) => {
    setIsTouched(true);
  };

  return {
    value: enteredValue,
    isValid: InputIsValid,
    InputIsInvalid,
    isTouched: isTouched,
    inputValueChangeHandler,
    InputBlurHandler,
  };
}
