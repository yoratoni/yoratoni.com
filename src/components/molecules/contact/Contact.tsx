import React from "react";
import "./Contact.css";

import { AnimationOnScroll } from "react-animation-on-scroll";
import Link from "components/atoms/link/Link";


const Contact = () => {
    const animationDivStyle = {
        width: "100%",
        height: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    };

    return (
        <section className="contact__container" id="contact__section">
            <AnimationOnScroll animateIn="animate__fadeInDown" animateOnce={true} style={animationDivStyle}>
                <div className="contact">
                    <div className="contact__titleContainer">
                        <h2>Contact</h2>
                    </div>

                    {/* <Link
                        otherStyle="w-full flex items-center justify-center mb-4"
                        name="yoratoni.dev@gmail.com"
                        title="Email me"
                        href="mailto:yoratoni.dev@gmail.com"
                        target="_blank"
                    /> */}
                </div>
            </AnimationOnScroll>
        </section>

    );
};


export default Contact;