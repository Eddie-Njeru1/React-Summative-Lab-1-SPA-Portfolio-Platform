import React from "react";
import { TextField } from "@mui/material"; //styling using material ui


function SearchProjects ({onSearch}) {
    return (
        <TextField //Material ui styling structure
            type="text"
            placeholder="Search Project"
            onChange={(e) => onSearch(e.target.value)}
            />
            
    );
};


export default SearchProjects;