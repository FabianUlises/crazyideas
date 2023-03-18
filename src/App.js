import React, { useState } from "react";
import './App.css';
// Components
import DisplayIdeas from "./components/DisplayIdeas";
import IdeasForm from "./components/IdeasForm";

function App() {
  // State
  const [ideas, setIdeas] = useState([
    "Movie about a guy who gets bit by a radioactive mole rat",
    "Romcom about two developers over Zoom",
    "Horror film where AWS goes down for 24 hours"
  ]);
  // Function to update state
  const addIdeas = (newIdeas) => {
    if(!newIdeas) return
    setIdeas([...ideas, newIdeas])
  }
  return (
    <main>
      <h1>Welcome, Super Awesome Movie Monster Think Tank!</h1>

      <br />
      
      <h1>Submit your ideas down below:</h1>
      <DisplayIdeas ideas={ideas} setIdeas={setIdeas} />
      <IdeasForm addIdeas={addIdeas} />

    </main>
  );
};
export default App;