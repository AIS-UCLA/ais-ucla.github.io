import { useMediaQuery } from "react-responsive";
import Layout from "../components/Layout";
import Section from "../components/Section";

import { CaretDownFill } from "react-bootstrap-icons";
import Logo from "../assets/logo.png";
import Banner from "../assets/banner.png";

const Home = () => (
  <Layout>
    <div id="content" className="container">
      <Section id="home" name="">
        <div className="d-flex flex-row flex-wrap p-2 justify-content-start ">
          <img
            className="d-block me-5"
            src={Logo}
            style={{
              maxHeight: "15rem",
            }}
          />

          <div className="d-flex flex-column justify-content-center">
            <div className="fw-bold fs-1">
              AI Safety
            </div>
            <div className="text-secondary fs-4 text-end">
              at UCLA
            </div>
          </div>

          <div className="my-2" style={{ maxWidth: "30rem" }}>
            AI Safety at UCLA researches the impact of
            increasingly powerful AI systems. We promote the
            development of fair, secure, and useful AI tools.
            Join us if you'd like to learn about AI Safety and
            research how we can use AI to build a better future.
          </div>
          <div className="border border-dark border-2 my-2" >
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
