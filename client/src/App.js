import { useState } from "react";
import "./App.css";
import $ from "jquery";

function App() {
  const [state, setState] = useState({});
  const [result, setResult] = useState("");

  function handleChange(e) {
    setState({ ...state, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const form = $(e.target);
    $.ajax({
      type: "POST",
      url: form.attr("action"),
      data: form.serialize(),
      success(data) {
        setResult(data);
      },
    });
  }
  return (
    <div className="App-header">
      <form
        action="http://localhost:8080"
        method="post"
        onSubmit={(event) => handleSubmit(event)}
      >
        <input
          className="form-control"
          type="text"
          name="text"
          placeholder="Enter sth here"
          onChange={handleChange}
        />
        <br />
        <button className="btn btn-success" type="submit">
          Submit
        </button>
      </form>
      {result}
    </div>
  );
}

export default App;
