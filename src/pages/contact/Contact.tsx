import React from "react";
import "pages/Pages.css";
import "./Contact.css";

import Social from "components/social/Social";


const Contact = () => {
    return (
        <div className="pages__container">
            <header className="pages__header">
                <h3 className="pages__header-subtitle">
                    You have an idea?
                </h3>
                <h1 className="pages__header-title">
                    CONTACT ME
                </h1>
                <h3 className="pages__header-subtitle contact__status">
                    &gt; UNAVAILABLE  &lt;
                </h3>
            </header>

            <div className="pages__content-container">
                <div className="pages__content">
                    <div className="contact__container">
                        <div className="contact__info">
                            <p>Based in Toulouse, France.</p>
                        </div>

                        <div className="contact__email">
                            <div className="contact__email-rule"></div>
                            <a
                                href="mailto: yoratoni.dev@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact__email-link"
                            >
                                yoratoni.dev@gmail.com
                            </a>
                            <div className="contact__email-rule"></div>
                        </div>

                        <div className="contact__social">
                            <Social />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Contact;