import React from "react";

// Function to pass array in app component as prop
function ProjectsList({projects}) {
    return (
        <div>
            {projects.map((project) => (
                <div key={project.title}>
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                </div>
            ))}
        </div>
    );
};

export default ProjectsList;