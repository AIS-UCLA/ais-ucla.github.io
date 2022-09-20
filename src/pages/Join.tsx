import { useMediaQuery } from "react-responsive";
import Layout from "../components/Layout";
import Section from "../components/Section";

import { CaretDownFill } from "react-bootstrap-icons";
import Banner from "../assets/banner.png";
import HrefLink from "../components/HrefLink";

const JoinPage = () => (
  <Layout>
    <div id="content" className="container">
      <Section id="intro" name="Intro to AI Safety Program">
        <h4>About</h4>
        <p>
          The Intro to AI Safety Program is a 7 week, quarter-long course
          which explores the impact of increasingly powerful AI
          systems on society, explains the problems which the AI
          safety field is currently working on, and goes over
          active areas of research in.
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
          <b>Everyone is welcome to apply</b> - no experience is required.
          Being open minded to novel ideas and spending time to deeply engage with them is all that is needed.
          That being said, a basic understanding of machine learning fundamentals or familiarity with contemporary
          AI research would provide a good baseline for the course’s content.
        </p>
        <h4>Apply</h4>
        <p>
          Applications are open!
        </p>
        <p>
          Deadline to apply is September 27, 11:59 pm
        </p>
        <p>
          Acceptances released by October 1, 11:59 pm
        </p>
        <p>
          <b>Apply Here</b>: <HrefLink href="https://airtable.com/shr5yCUNXsBScIEcK" />
        </p>
      </Section>
      <Section id="newsletter" name="Newsletter">
        <p>
          Please sign up for our newsletter to stay up to date with events, important announcements, and interesting new papers in AI.
          We promise not to spam you!
        </p>
        <p>
          Join our Newsletter: <HrefLink href="https://airtable.com/shrImJ6z27mX3tkkA" />
        </p>
        <h4>Events</h4>
        <p>
          We host workshops throughout the quarter. Meet with other talented people in the broader AI safety community and work on challenging problems!
          See our current workshops here: {/*<put link to workshops page here>*/}
        </p>
      </Section>
      <Section id="project_proposals" name="Project Proposals">
        <p>
          If you have AI safety project ideas, we would love to hear them!
        </p>
        <p>
          Project application: <HrefLink href="https://airtable.com/shr9qTP5wgMevAY9e" />
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
