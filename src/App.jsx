// Import the child components into the parent App which will pass down data as props.
import React from "react";
import Button from '@mui/material/Button'; 
import AddProjects from "./components/AddProjects";
import ProjectsList from "./components/ProjectsList";
import SearchProjects from "./components/SearchProjects";
// import useState hook to manage the states of the components
import { useState } from "react";

function App() { //Variables to be passed down as props to child components
  const [projects, setProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  
  return (
    <div>
      <h1>Personal Project Showcase App</h1>
      <h2> Add Project</h2>
      <AddProjects/>
      <h2> Search Project</h2>
      <SearchProjects onSearch={setSearchTerm}/>
      <h2> Project List</h2>
      <ProjectsList projects={projects}/>
      
    </div>
  );
};
  
export default App;
