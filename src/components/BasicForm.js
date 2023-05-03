import { useState } from "react";
const BasicForm = (props) => {
  const [firstNameValue, setFirstNameValue] = useState("");
  const [firstIsTouched, setFirstIsTouched] = useState(false);

  const [lastNameValue, setLastNameValue] = useState("");
  const [lastIsTouched, setLastIsTouched] = useState(false);

  const [emailValue, setEmailValue] = useState("");
  const [emailIsTouched, setEmailIsTouched] = useState(false);

  const firstNameInputIsValid = firstNameValue.trim() !== "";
  const firstNameInputIsInvalid = !firstNameInputIsValid && firstIsTouched;

  const lastNameInputIsValid = lastNameValue.trim() !== "";
  const lastNameInputIsInvalid = !lastNameInputIsValid && lastIsTouched;

  const emailInputIsValid =
    emailValue.trim() !== "" && emailValue.includes("@");
  const emailInputIsInvalid = !emailInputIsValid && emailIsTouched;

  // ----------first name input
  const firstNameValueChangeHandler = (event) => {
    setFirstNameValue(event.target.value);
  };

  const firstNameInputBlurHandler = (event) => {
    setFirstIsTouched(true);
  };
  // ---------last name input

  const lastNameValueChangeHandler = (event) => {
    setLastNameValue(event.target.value);
  };

  const lastNameInputBlurHandler = (event) => {
    setLastIsTouched(true);
  };

  // ----------email input
  const emailValueChangeHandler = (event) => {
    setEmailValue(event.target.value);
  };

  const emailInputBlurHandler = (event) => {
    setEmailIsTouched(true);
  };

  let formIsValid = false;

  if (firstNameInputIsValid && lastNameInputIsValid && emailInputIsValid) {
    formIsValid = true;
  }

  const submissionHandler = (event) => {
    event.preventDefault();
    setFirstIsTouched(true);
    setLastIsTouched(true);
    setEmailIsTouched(true);

    if (!firstNameInputIsValid && !lastNameInputIsValid && !emailInputIsValid) {
      return;
    }

    console.log(firstNameValue);
    console.log(lastNameValue);
    console.log(emailValue);

    setFirstNameValue("");
    setFirstIsTouched(false);

    setLastNameValue("");
    setLastIsTouched(false);

    setEmailValue("");
    setEmailIsTouched(false);
  };

  const firstNameControlClasses = firstNameInputIsInvalid
    ? "form-control invalid"
    : "form-control";
  const lastNameControlClasses = lastNameInputIsInvalid
    ? "form-control invalid"
    : "form-control";
  const emailControlClasses = emailInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={submissionHandler}>
      <div className="control-group">
        <div className={firstNameControlClasses}>
          <label htmlFor="name">First Name</label>
          <input
            onChange={firstNameValueChangeHandler}
            onBlur={firstNameInputBlurHandler}
            value={firstNameValue}
            type="text"
            id="name"
          />
          {firstNameInputIsInvalid && (
            <p className="error-text">Please enter a valid First Name</p>
          )}
        </div>
        <div className={lastNameControlClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            onChange={lastNameValueChangeHandler}
            onBlur={lastNameInputBlurHandler}
            value={lastNameValue}
            type="text"
            id="name"
          />
          {lastNameInputIsInvalid && (
            <p className="error-text">Please enter a valid Last Name</p>
          )}
        </div>
      </div>
      <div className={emailControlClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          onChange={emailValueChangeHandler}
          onBlur={emailInputBlurHandler}
          value={emailValue}
          type="email"
          id="name"
        />
        {emailInputIsInvalid && (
          <p className="error-text">Please enter a valid E-Mail</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
