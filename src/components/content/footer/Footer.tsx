import React from "react";
import "./Footer.css";


const Footer = () => {
    return (
        <footer className="site__footer">
            ©&nbsp;{new Date().getFullYear()}&nbsp;Adrien&nbsp;Bibollet.
            All&nbsp;Rights&nbsp;Reserved.
        </footer>
    );
};


export default Footer;