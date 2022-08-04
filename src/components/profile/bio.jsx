import React from "react";

const Bio = (props) => (
    <div className="bio">
        <h3>{props.name}</h3>
        <h4>{props.title}</h4>
        <h4>{props.note}</h4>
    </div>
);

export default Bio;