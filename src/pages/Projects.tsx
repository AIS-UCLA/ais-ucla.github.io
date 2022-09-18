import { useMediaQuery } from "react-responsive";
import Layout from "../components/Layout";
import Section from "../components/Section";

import { CaretDownFill } from "react-bootstrap-icons";
import Banner from "../assets/banner.png";

const Home = () => (
    <Layout>
        <div id="content" className="container">
            <Section id="projects" name="">
                <div>
                    <h2 className="py-2">Projects</h2>
                    <h4><u>About</u></h4>
                    <h4><u>Eligibility</u></h4>
                    <h4><u>Apply</u></h4>
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