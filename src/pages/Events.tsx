import { useMediaQuery } from "react-responsive";
import Layout from "../components/Layout";
import Section from "../components/Section";
import HrefLink from "../components/HrefLink";

import { CaretDownFill } from "react-bootstrap-icons";
import Banner from "../assets/banner.png";

const Home = () => (
  <Layout>
    <div id="content" className="container">
      <Section id="events" name="Events">
        <h4>Winter 2024 General Meeting</h4>
        <p>
          Join us for our Winter 2024 General Meeting! You'll get to see the projects we're working on, meet fellow members, and learn how you can get involved with AI Safety!
          Both current members and prospective members are invited!
        </p>
        <p>
          We'll have snacks and free swag!
        </p>
        <p>
          <b>Where:</b> TBD
        </p>
        <p>
          <b>When:</b> TBD
        </p>
        <p>
          <b>RSVP Here:</b> <HrefLink href="https://forms.gle/5h7v8gAxPYaGggBh6" />
        </p>
      </Section>
      <Section id="past-events" name="Past Events">
        <h4>Define, Design, and Align</h4>
        <p>
          Define, Design, and Align was an intensive intercollegiate alignment workshop that took place in January 2023 in Los Angeles.
          Participants collaborated to solve <a href="https://docs.google.com/document/d/1NVVtdsfz7HiseVFSk3jYly4sPG4dG03wFFDrD8rBXU0/edit?usp=sharing">open problems in alignment</a> and
          develop actionable research agendas.
        </p>
        <p>
          We wrote an in depth forum post about the event here: <HrefLink href="https://forum.effectivealtruism.org/posts/SkkAo8W4rg5kGrkTc/we-ran-an-alignment-workshop" />.
        </p>
        <h4>AI Timelines Workshop</h4>
        <p>
          UCLA EA ran an AI timelines retreat for community members interested in pursuing AI safety as a career.
          Attendees sought to form inside views on the future of AI based on an object-level analysis of current AI capabilities.
        </p>
        <p>
          This event took place on May 2022.
        </p>
        <p>
          We wrote an in depth forum post about the event here: <HrefLink href="https://forum.effectivealtruism.org/posts/EZQQmhMsa36zwPeGB/we-ran-an-ai-timelines-retreat" />.
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

const root = createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
