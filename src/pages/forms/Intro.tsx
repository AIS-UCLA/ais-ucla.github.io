import { useMediaQuery } from "react-responsive";
import Layout from "../../components/Layout";
import Section from "../../components/Section";

import { CaretDownFill } from "react-bootstrap-icons";

const Home = () => (
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
          Applications are open for Fall Quarter 2023!
        </p>
        <p>
          Applications will be processed on a rolling basis.
        </p>
        <p>
          <b>Apply Here</b>: <HrefLink href="https://forms.gle/v5Ujjo6NvjE5bDsRA" />
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
import "../../styles/style.scss";
import HrefLink from "../../components/HrefLink";

const root = createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
