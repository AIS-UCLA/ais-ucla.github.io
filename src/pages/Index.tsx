import { useMediaQuery } from "react-responsive";
import Layout from "../components/Layout";
import Section from "../components/Section";

import { CaretDownFill } from "react-bootstrap-icons";
import Logo from "../assets/banner.png";

const Home = () => (
    <Layout>
        <div id="content" className="container">
            <Section id="home" name="">
                <div className="d-inline-flex justify-content-start flex-wrap p-2">
                    <img
                        className="d-inline-flex justify-content-end"
                        src={Logo}
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
                            Better AI Safe than AI Sorry
                        </p>
                    </div>
                </div>
            </Section>
            <Section id="fellowship" name=""></Section>
            <Section id="projects" name=""></Section>
            <Section id="join" name=""></Section>
        </div>
    </Layout>
);

import React from "react";
import { createRoot } from "react-dom/client";

import ReactDOM from "react-dom";

// Bootstrap CSS & JS
import "bootstrap/dist/js/bootstrap";
import "../styles/style.scss";

ReactDOM.render(
    <React.StrictMode>
        <Home />
    </React.StrictMode>,
    document.getElementById("root")
);
