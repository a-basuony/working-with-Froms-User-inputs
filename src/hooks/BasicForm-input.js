import React, { useState, useReducer } from "react";

const initialState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === "INPUT") {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === "BLUR") {
    return { value: state.value, isTouched: true };
  }
  if (action.type === "RESET") {
    return { value: "", isTouched: false };
  }
  return inputStateReducer;
};

export default function useInputForm(validateValue) {
  const [inputState, dispatch] = useReducer(inputStateReducer, initialState);

  // const [enteredValue, setEnteredValue] = useState("");
  // const [isTouched, setIsTouched] = useState(false);

  const InputIsValid = validateValue(inputState.value);
  const InputIsInvalid = !InputIsValid && inputState.isTouched;

  const inputValueChangeHandler = (event) => {
    // setEnteredValue(event.target.value )
    dispatch({ type: "INPUT", value: event.target.value });
  };

  const InputBlurHandler = (event) => {
    // setIsTouched(true )
    dispatch({ type: "BLUR" });
  };

  const reset = () => {
    // setEnteredValue('')
    dispatch({ type: "RESET" });
  };

  return {
    value: inputState.value,
    isValid: InputIsValid,
    InputIsInvalid,
    inputValueChangeHandler,
    InputBlurHandler,
    reset,
  };
}
