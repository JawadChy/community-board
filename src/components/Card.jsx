import React from "react";
import "./Card-Container.css";

const Card = (props) => {
    return (
        <div className="card">
            <img src={props.image} alt={props.title} />
            <h3>{props.title}</h3>
            <h4>{props.organization}</h4>
            <p>{props.description}</p>
            <a href={props.link} target="_blank">
                <button>Check it out!</button>
            </a>
        </div>
    )
}

export default Card;
