import React from "react";
import "./NoteCard.css";

function NoteCard(props) {
    return (
        <div className="card">
            <div className="content">
                <ul>
                    <li>
                        <p>{props.noteText}</p>
                    </li>
                </ul>
                    <li>
                        <strong>--{props.name}</strong>
                    </li>
            </div>
        </div>
    );

}

export default NoteCard;