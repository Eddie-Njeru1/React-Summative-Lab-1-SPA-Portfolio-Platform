import { TextField, Button } from "@mui/material"; //styling using material ui
import React from "react";
// import useState hook to manage the state of this component
import {useState} from "react";

// Handle the state of each input section
function AddProjects() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault(); //Prevents refreshing the page
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextField
            label="Title"
            type="text"
            placeholder="Type Title Here"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />

            <TextField
            label="Description"
            type="text"
            placeholder="Type Description Here"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            />

            <Button variant="contained" type="submit">Submit Project</Button>

        </form>
    );
};

export default AddProjects;