import { useMediaQuery } from "react-responsive";
import Layout from "../../components/Layout";
import Section from "../../components/Section";

import { CaretDownFill } from "react-bootstrap-icons";

const Home = () => (
    <Layout>
        <div id="content" className="container">
            <Section id="FormsIntro" name="">
                <div><h2>Intro to AI Safety Program Application</h2></div>
                <div></div>
            </Section>
        </div>
    </Layout>
);

import React from "react";
import { createRoot } from "react-dom/client";

import ReactDOM from "react-dom";

// Bootstrap CSS & JS
import "bootstrap/dist/js/bootstrap";
import "../../styles/style.scss";

const root = createRoot(document.getElementById("root")!);
root.render(
    <React.StrictMode>
        <Home />
    </React.StrictMode>
);
