// Import the child components into the parent App component which will pass down data as props.
import React from "react";
import AddProjects from "./components/AddProjects";
import ProjectLists from "./components/ProjectLists";
import SearchProjects from "./components/SearchProjects";
// import useState hook to manage the states of the project components
import { useState } from "react";

function App() {
  const [projects, setProjects] = useState([])

  return (
    <div>
      <h1>Personal Project Showcase App</h1>
    </div>
  )
}
  
export default App
