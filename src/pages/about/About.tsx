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
                            <div className="about__button">&lt;</div>

                            <div className="about__height-limiter">
                                <div className="about__content">
                                    <div className="about__text">
                                        <p>
                                            My interest in programming started when I was around 13 years old,
                                            I was working on some small electronic projects in my garage.
                                            But after some time, I wanted to do more but I didn&apos;t have
                                            enough tools to make bigger projects, so I started to look for
                                            some alternatives.
                                        </p>

                                        <p>
                                            That&apos;s when I discovered the world of programming
                                            by watching some videos on YouTube.
                                            I started to understand that it could allow me to create
                                            anything I wanted even without any real budget.
                                        </p>

                                        <p>
                                            I started to learn programming by myself with a game engine called
                                            Game Maker 6, I was able to create some small games and share
                                            them with my friends, after a bit, I became pretty good at it.
                                        </p>

                                        <p>
                                            It followed by a few years of learning and experimenting with
                                            different programming languages and frameworks, dreaming about
                                            creating my own video games, but I was always missing something,
                                            probably professional experience and a real project to work on.
                                        </p>

                                        <p>
                                            In 2022, I decided to take the plunge and started a new career as a
                                            web developer, allowing me to combine my passion for programming
                                            and my interest in the web.
                                            I was able to find a job as a web developer in a new company
                                            and I&apos;m currently working on a big project with my colleagues.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="about__button">&gt;</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default About;