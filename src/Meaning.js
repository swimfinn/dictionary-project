import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms.js";

export default function Meaning(props) {
    return (
        <div className="Meaning">
            <h3>{props.meaning.partOfSpeech}</h3>
            {props.meaning.definitions.map(function (definition, index) {
                return (
                    <div key={index}>
                        <div className="definition">- {definition.definition}</div>
                        <div className="example">{definition.example}</div>
                    </div>
                );
            })}

            <Synonyms synonyms={props.meaning.synonyms} />
        </div>
    );
}