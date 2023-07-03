import SimpleInput from "./components/SimpleInput";
import BasicForm from "./components/BasicForm";

function App() {
  return (
    <div className="app">
      <SimpleInput />
      {/* using use-input hook , it takes useState to handle input validation */}
      <br />
      <hr />
      <br />
      <BasicForm />
      {/* using BasicForm-input hook , it takes useReducer to handle input validation  */}
    </div>
  );
}

export default App;
