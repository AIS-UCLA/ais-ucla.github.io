import { useMediaQuery } from "react-responsive";
import Layout from "../components/Layout";
import Section from "../components/Section";

import { CaretDownFill } from "react-bootstrap-icons";
import Logo from "../assets/logo.png";
import Banner from "../assets/banner.png";

import GPT3Quote from "../components/GPT3Quote";

const Home = () => (
  <Layout>
    <div id="content" className="container">
      <Section id="home" name="">
        <div className="row">
          <div className="col-xl-2 col-md-4">
            <img
              className="mx-auto"
              src={Logo}
              style={{
                maxHeight: "15rem",
              }}
            />
          </div>

          <div className="col-xl-5 col-md-8">
            <div className="d-inline-block mx-auto">
              <div className="d-flex flex-column justify-content-center">
                <div style={{ fontWeight: "bold", fontSize: "5rem" }}>
                  AI Safety
                </div>
                <div className="text-secondary" style={{ fontSize: "2rem", textAlign: "end" }}>
                  at UCLA
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-5 fs-5 pt-5">
            <div className="d-flex flex-column">
              <div>
                AI Safety at UCLA researches the impact of
                increasingly powerful AI systems. We promote the
                development of fair, secure, and useful AI tools.
                Join us if you'd like to learn about AI Safety and
                research how we can use AI to build a better future.
              </div>
              <div className="pt-5"style={{ height: "13rem" }}>
                <blockquote className="border border-dark border-2 p-3">
                  <GPT3Quote
                    style={{
                      backgroundColor: "lightgreen",
                      fontSize: "1.5rem",
                    }}
                  />
                  <footer className="fs-5 fw-bold ms-3">- GPT 3</footer>
                </blockquote>
              </div>
            </div>
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
