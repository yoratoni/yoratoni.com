import React from "react";
import "pages/Pages.css";
import "./About.css";


const About = () => {
    return (
        <div className="pages__container">
            <header className="pages__header">
                <h3 className="pages__header-subtitle">
                    Just a little bit info
                </h3>
                <h1 className="pages__header-title">
                    ABOUT ME
                </h1>
                <h3 className="pages__header-subtitle">
                    &gt; More than a web developer &lt;
                </h3>
            </header>

            <div className="pages__content-container">
                <div className="pages__content">
                    <div className="about__wrapper">
                        <div className="about__container">
                            <div className="about__content">
                                <div className="about__text">
                                    <p className="about__text-section">
                                        Hi! I&apos;m a web developer from Toulouse, France.
                                        Not only in the web development field, I&apos;m also
                                        passionate about cryptocurrencies, game and software development.
                                        <br/>
                                        <br/>
                                        Never really interested in the traditional school system,
                                        I decided to learn development by myself. I&apos;ve been
                                        working on several projects in a lot of different fields.
                                        Still working on my own projects from time to time.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default About;