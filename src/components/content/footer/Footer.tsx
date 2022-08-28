import React from "react";
import "./Footer.css";


const Footer = () => {
    return (
        <footer className="footer">

            <p className="footer_copyrights">
                ©&nbsp;{new Date().getFullYear()}&nbsp;Adrien&nbsp;Bibollet
                <span>•</span>
                <br></br>
                All&nbsp;Rights&nbsp;Reserved.
            </p>
        </footer>
    );
};


export default Footer;