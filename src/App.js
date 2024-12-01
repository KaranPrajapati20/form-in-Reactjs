import "./App.css";
import { useState } from "react";

function App() {
  const [formData, setData] = useState({
    name: "",
    age: "",
    email: "",
  });

  const [steps, setSteps] = useState(1);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...formData, [name]: value });
  };

  const isValid = () => {
    if (steps === 1 && formData.name === "") {
      setError("Please enter your name");
      return false;
    } else if (steps === 2 && formData.age === "") {
      setError("Please enter your age");
      return false;
    } else if (steps === 3 && formData.email === "") {
      setError("Please enter your email");
      return false;
    }
    setError("");
    return true;
  };

  const next = () => {
    if (isValid()) setSteps((s) => s + 1);
  };

  const previous = () => {
    setSteps((s) => s - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid()) {
      alert("Form submitted successfully");
      setData({
        name: "",
        age: "",
        email: "",
      });
      setSteps(1);
    }
  };

  return (
    <div className="App">
      <form action="" onSubmit={handleSubmit}>
        {steps === 1 && (
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
        )}

        {steps === 2 && (
          <div>
            <label htmlFor="age">Age</label>
            <input
              type="text"
              name="age"
              id="age"
              value={formData.age}
              onChange={handleChange}
            />
          </div>
        )}

        {steps === 3 && (
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        )}

        <p>{error}</p>

        <div>
          {steps > 1 && <button type="button" onClick={previous}>Prev</button>}
          {steps < 3 && <button type="button" onClick={next}>Next</button>}
        </div>

        {steps === 3 && (
          <button type="submit">Submit</button>
        )}
      </form>
    </div>
  );
}

export default App;
