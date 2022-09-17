import { useMediaQuery } from "react-responsive";
import Layout from "../components/Layout";
import Section from "../components/Section";

import { CaretDownFill } from "react-bootstrap-icons";
import Banner from "../assets/banner.png";

const Home = () => (
    <Layout>
        <div id="content" className="container">
            <Section id="home" name="">
                <div className="d-flex justify-content-start flex-wrap p-2">
                    <img
                        className="d-inline-flex justify-content-end"
                        src={Banner}
                        style={{
                            maxHeight: "15rem",
                            maxWidth: "15rem",
                        }}
                    ></img>
                    <div id="slogan" className="my-2">
                        <p>
                            AI Safety at UCLA researches the impact of
                            increasingly powerful AI systems. We promote the
                            development of fair, secure, and useful AI tools.
                            Join us if you'd like to learn about AI Safety and
                            research how we can use AI to build a better future.
                        </p>
                    </div>
                    <div
                        id="quote"
                        className="border border-dark border-2 my-2"
                    >
                        <p className="px-2 pt-3">
                            "Better AI Safe than AI Sorry"
                        </p>
                    </div>
                </div>
            </Section>
            <Section id="fellowship" name="">
                <div>
                    <h2 className="py-2">Intro to AI Safety Program</h2>
                    <h4><u>About</u></h4>
                    <h4><u>Eligibility</u></h4>
                    <h4><u>Apply</u></h4>
                </div>
            </Section>
            <Section id="workshops" name="">
                <div>
                    <h2 className="py-2">Workshops</h2>
                    <h4><u>About</u></h4>
                    <h4><u>Event Timings</u></h4>
                    <h4><u>RSVP</u></h4>
                </div>
            </Section>
            <Section id="projects" name="">
                <div>
                    <h2 className="py-2">Projects</h2>
                    <h4><u>About</u></h4>
                    <h4><u>Eligibility</u></h4>
                    <h4><u>Apply</u></h4>
                </div>
            </Section>
            <Section id="join" name="">
                <div>
                    <a href="/forms/intro"><h2 className="py-2">Join</h2></a>
                </div>
            </Section>
        </div>
    </Layout>
);

import React from "react";
import { createRoot } from "react-dom/client";

import ReactDOM from "react-dom";

// Bootstrap CSS & JS
import "bootstrap/dist/js/bootstrap";
import "../styles/style.scss";

const root = createRoot(document.getElementById("root")!);
root.render(
    <React.StrictMode>
        <Home />
    </React.StrictMode>
);
