import React from "react";


function SearchProjects ({onSearch}) {
    return (
        <input
            type="text"
            placeholder="Search Project"
            onChange={(e) => onSearch(e.target.value)}
            />
    );
};


export default SearchProjects;