import React from "react";
import usflag from "../Images/usflag.jpeg";
//import "./contact.css";


function Contact() {
    return (
        <a href="/" >
            <div class="page">
            <div>
                Thank you for taking your time to 
                visit our website. We hope you enjoyed
                browsing through our selection of fine
                soaps. We hope you come back again soon.
            </div>
            <img src={usflag} class="mx-auto d-block img"   /> 

            </div></a>
    ) 
}
   
export default Contact;