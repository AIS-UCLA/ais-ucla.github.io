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
                AI Safety at UCLA works to ensure that the development of powerful AI systems is done safely.
                We are a research focused club which strives to provide students the tools and guidance to tackle the problems that interest them.
                Join us if you'd like to learn about AI safety and discover how we can use AI to build a better future.
              </div>
              <div className="pt-5" style={{ height: "13rem" }}>
                <blockquote className="border border-dark border-2 p-3">
                  <GPT3Quote
                    style={{
                      backgroundColor: "#d2f4d3",
                      fontSize: "1.5rem",
                    }}
                  />
                  <footer className="fs-5 fw-bold">- GPT 3</footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section id="join" name="Join">
        <p>
          The Intro to AI Safety Program is a 7 week, quarter-long course
          which explores the impact of increasingly powerful AI
          systems on society, explains the problems which the AI
          safety field is currently working on, and goes over
          active areas of research.
        </p>
        <p>
          <b><a href="/join.html#intro">Learn More</a></b>
        </p>
      </Section>
      <Section id="events" name="Events">
        <p>
          We host events throughout the quarter. Meet with other talented people in the broader AI safety community and work on challenging problems!
        </p>
        <p>
          <a href="/events.html"><b>Learn More</b></a>
        </p>
      </Section>
      <Section id="projects" name="Projects">
        <p>
          If you have AI safety project ideas, we would love to hear them!
        </p>
        <p>
          <b>Project application</b>: <HrefLink href="https://airtable.com/shr9qTP5wgMevAY9e" />
        </p>
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
import HrefLink from "../components/HrefLink";

const root = createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
