import Layout from "../components/Layout";
import Section from "../components/Section";
import AsideCard from "../components/AsideCard";
import Carousel from '../components/Carousel';

import Logo from "../assets/logo.png";

import GPT3Quote from "../components/GPT3Quote";

import MetadriveWebm from '../assets/projects/metadrive/scenario_0_closed_loop.webm';
import AlphazeroWebm from '../assets/projects/alphazero/alphazero.webm';
import AmogusWebm from '../assets/projects/omegasus/amogus.webm';
import MoyaiWebm from '../assets/projects/neural-cellular-automaton/moyai.webm';

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
      <Section id="projects" name="What We Do">
        <p>
          We think that the best way to make progress on the problem of AI safety is getting more people to focus their careers on AI safety research,
          in fields like <a href="https://transformer-circuits.pub/2022/mech-interp-essay/index.html">mechanistic interpretability</a>
          , <a href="https://adversarial-ml-tutorial.org/introduction/">adversarial robustness</a>,
          or <a href="https://www.techtarget.com/searchenterpriseai/definition/AI-governance">AI governance</a>.
        </p>
        <p>
          We exist to help people interested in this problem skill up in machine learning, by working on projects that they can both learn from and add to their portfolios.
        </p>
        <p>
          We've worked on a variety of projects in the past. Here are some of our favorites!
        </p>
        <AsideCard id="projects" title="Projects">
          <Carousel
            contents={[
              {
                title: "Metadrive",
                blurb: <>
                  In 2023, AI Safety at UCLA members trained a Reinforcement Learning agent to drive a car using
                  the Metadrive driving simulator.
                </>,
                videoSrc: MetadriveWebm,
                url: "https://github.com/pimpale/mdt"
              },
              {
                title: "AlphaZero",
                blurb: <>
                  In 2023, we ran a tournament to design AI algorithms that played Connect4.
                  An implementation of Deepmind's <a href="https://en.wikipedia.org/wiki/AlphaZero">AlphaZero</a> algorithm was the winner!
                </>,
                videoSrc: AlphazeroWebm,
                url: "https://github.com/wz-ml/A0-Connect4"
              },
              {
                title: "OmegaSUS",
                blurb: <>
                  In this work, we simulate the popular online multi-player game 'Among Us'.
                  Inspired by works like CICERO, we use multiple models to tackle different parts of a full game.
                </>,
                videoSrc: AmogusWebm,
                url: "https://github.com/pimpale/omegasus"
              },
              {
                title: "Neural Cellular Automata",
                blurb: <>
                  This project, created by one of our members, implements a neural network cellular automaton from the paper <HrefLink href="https://distill.pub/2020/growing-ca/" />.
                  It's able to grow a 🗿 from scratch.
                </>,
                videoSrc: MoyaiWebm,
                url: "https://github.com/wz-ml/cellularimages"
              },
            ]}
          />
        </AsideCard>
      </Section>
      <Section id="join" name="Get Involved!">
        <p>
          There are a variety of ways for you to get involved with our club:
        </p>
        <p>
          <b>Join us for our Winter 2024 General Meeting</b>: <HrefLink href="https://forms.gle/5h7v8gAxPYaGggBh6" />
        </p>
        <p>
          <b>Talk to us on Discord</b>: <HrefLink href="https://discord.gg/37TzSyrwmf" />
        </p>
      </Section>
      <Section id="newsletter" name="Newsletter">
        <p>
          If you'd like to stay up to date with the events we're running, as well as AI Safety opportunities, sign up for our newsletter!
        </p>
        <p>
          <b>Newsletter</b>: <HrefLink href="http://eepurl.com/h9dY9P" />
        </p>
      </Section>
    </div>
  </Layout>
);

import React from "react";
import { createRoot } from "react-dom/client";

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
