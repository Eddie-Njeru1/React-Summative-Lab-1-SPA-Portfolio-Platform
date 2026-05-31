import React from "react";
// import useState hook to manage the state of this component
import {useState} from "react";

// Handle the state of each input section
function AddProject() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); //Prevents refreshing the page
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
            id="title"
            type="text"
            placeholder="Type here"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />

            <input
            id="description"
            type="text"
            placeholder="Type here"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            />

            <button type="submit">Submit Project</button>

        </form>
    )
};

export default AddProject;