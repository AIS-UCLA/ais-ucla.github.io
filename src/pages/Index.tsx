import { useMediaQuery } from "react-responsive";
import Layout from "../components/Layout";
import Section from "../components/Section";

import { CaretDownFill } from "react-bootstrap-icons";
import Logo from "../assets/logo.png";
import Banner from "../assets/banner.png";

import GPT3Quote from "../components/GPT3Quote";

import MetadriveWebm from '../assets/carousel/scenario_0_closed_loop.webm';
import AlphazeroWebm from '../assets/carousel/alphazero.webm';
import AmogusWebm from '../assets/carousel/amogus.webm';
import MoyaiWebm from '../assets/carousel/moyai.webm';
import Carousel from '../components/Carousel';

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
                marginTop: "4rem",
                maxHeight: "13rem",
              }}
            />
          </div>

          <div className="col-xl-4 col-md-8">
            <div className="d-inline-block mx-auto">
              <div className="d-flex flex-column justify-content-center">
                <div style={{ fontWeight: "bold", fontSize: "4rem", marginTop: "4rem", }}>
                  AI Safety
                </div>
                <div className="text-secondary" style={{ fontSize: "2rem", textAlign: "end" }}>
                  at UCLA
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-6 fs-5 pt-5">
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
      <Section id="projects" name="Past Projects">
        <Carousel
          contents={[
            {
              blurb: <div>
                We trained a Reinforcement Learning agent to drive a car using
                the Metadrive driving simulator.
              </div>,
              videoSrc: MetadriveWebm,
              url: "https://github.com/pimpale/mdt"
            },
            {
              blurb: <div>
              </div>,
              videoSrc: AlphazeroWebm,
              url: "https://github.com/wz-ml/A0-Connect4"
            },
            {
              blurb: <div>
                In this work, we simulate the popular online multi-player game 'Among Us'.
                Inspired by works like CICERO, we use multiple models to tackle different parts of a full game.
              </div>,
              videoSrc: AmogusWebm,
              url: "https://github.com/pimpale/omegasus"
            },
            {
              blurb: <div>
                This project showcases a neural network cellular automaton from the paper <HrefLink href="https://distill.pub/2020/growing-ca/" />.
                It's able to grow a 🗿 from scratch.
              </div>,
              videoSrc: MoyaiWebm,
              url: "https://github.com/wz-ml/cellularimages"
            },
          ]}
        />
      </Section>
      <Section id="join" name="Join">
        <h5>Intro </h5>
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
        <h5>MLAB</h5>
        <p>
          MLAB is an intensive technical machine learning course that builds a foundation for advanced techniques
          from basic skills.
          The course was created by Redwood Research (a leading AI safety research company based out of Berkeley, CA)
          to skill up potential AI safety researchers.

          This is the next step in AI Safety at UCLA.
          We recommend everyone who has completed the Intro Fellowship apply!
          Our program will consist of ~1 week's worth of MLAB 2 content over 6 weeks.
        </p>
        <p>
          <b><a href="/join.html#mlab">Learn More</a></b>
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
