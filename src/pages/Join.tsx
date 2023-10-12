import { useMediaQuery } from "react-responsive";
import Layout from "../components/Layout";
import Section from "../components/Section";

import { CaretDownFill } from "react-bootstrap-icons";
import Banner from "../assets/banner.png";
import HrefLink from "../components/HrefLink";

const JoinPage = () => (
  <Layout>
    <div id="content" className="container">
      <Section id="intro" name="Intro to AI Safety Fellowship">
        <h4>About</h4>
        <p>
          The Intro to AI Safety Fellowship is a 6 week, quarter-long course
          which explores the impact of increasingly powerful AI
          systems on society, explains the problems which the AI
          safety field is currently working on, and goes over
          active areas of research.
        </p>
        <p>
          The program consists of a series of video and reading
          lessons which are accompanied by weekly, collective
          meetings that expand on the topics covered in the
          lessons. You can expect to learn from many prevailing
          sources in the field which will help you develop a solid
          research agenda that you may work towards in the
          following quarters.
        </p>
        <h4>Eligibility</h4>
        <p>
          We're looking for students who meet any of the following requirements:
          <ul>
            <li>Have taken CS 31 or an equivalent class <b>OR</b></li>
            <li>Have worked on a Python project (either a personal one or for an internship) <b>OR</b></li>
            <li>Have strong skills in another programming language</li>
          </ul>
          Additionally, a basic understanding of machine learning fundamentals and familiarity with contemporary
          AI research would provide a good baseline for the course’s content.
        </p>
        <h4>Apply</h4>
        <p>
          Applications are closed for Fall Quarter 2023.
        </p>
        <p>
          The deadline was October 8 at 11:59 PM.
        </p>
        <p>
          We released decisions on October 11.
        </p>
      </Section>
      <Section id="art" name="Alignment Research Teams (ART)">
        <p>
          ART is our new initiative for real-world AI safety research.
          We will be forming small groups of AI Safety at UCLA fellows with organizers on an approved alignment or ethics-related AI project.
          Please note that this should and will be an intensive project, so expect to spend 3+ hours a week.
        </p>
        <p>
          Feel free to apply for both the Intro Fellowship and ART!
        </p>
        <p>
          <b>Apply Here</b>: <HrefLink href="https://forms.gle/MxEFyBUT8RcEstp78" />
        </p>
      </Section>
      <Section id="newsletter" name="Newsletter">
        <p>
          Please sign up for our weekly newsletter to stay up to date with events and important announcements.
        </p>
        <p>
          <b>Join our Newsletter</b>: <HrefLink href="http://eepurl.com/h9dY9P" />
        </p>
      </Section>
      <Section id="discord" name="Discord">
        <p>
          We have a Discord server where you can discuss with us.
        </p>
        <p>
          <b>Discord</b>: <HrefLink href="https://discord.gg/37TzSyrwmf" />
        </p>
      </Section>
      <Section id="events" name="Events">
        <p>
          We host events throughout the quarter. Meet with other talented people in the broader AI safety community and work on challenging problems!
        </p>
        <p>
          <b>See our current events here</b>: <HrefLink href="/events.html" />
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
    <JoinPage />
  </React.StrictMode>
);
