import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
    return (
        <div className="Phonetic">
            <span className="text">{props.phonetic.text}</span>
            <button className="Player">
                <a className="Audio" href={props.phonetic.audio} rel="noreferrer" target="_blank">►</a></button>
        </div>
    );
}