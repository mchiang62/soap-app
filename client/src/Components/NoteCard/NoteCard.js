import React from "react";
import "./NoteCard.css";

function NoteCard(props) {
    return (
        <div className="card noteCard">
            <div className="content">
               
                        <p className="noteText">"{props.noteText}"</p>
                
                        <strong className="noteName">--{props.name}</strong>

            </div>
        </div>
    );

}

export default NoteCard;