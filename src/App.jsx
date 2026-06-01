// Import the child components into the parent App which will pass down data as props.
import React from "react";
import AddProjects from "./components/AddProjects";
import ProjectsList from "./components/ProjectsList";
import SearchProjects from "./components/SearchProjects";
// import useState hook to manage the states of the components
import { useState } from "react";

function App() {
  const [projects, setProjects] = useState([]);

  return (
    <div>
      <h1>Personal Project Showcase App</h1>
      <AddProjects/>
      <ProjectLists/>
      <SearchProjects/>
    </div>
  );
};
  
export default App;
