import React from "react";

export function FormBtn(props) {
    return(
        <button {...props} className="btn btn-primary my-2 my-sm-0">
            {props.children}
        </button>
    );
}