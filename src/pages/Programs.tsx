import { useMediaQuery } from "react-responsive";
import Layout from "../components/Layout";
import Section from "../components/Section";

import { CaretDownFill } from "react-bootstrap-icons";
import Banner from "../assets/banner.png";

const Home = () => (
  <Layout>
    <div id="content" className="container">
      <Section id="programs" name="">
        <div>
          <h1 className="py-2">Intro to AI Safety Program</h1>
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
            Everyone is welcome to apply; an aptitude for thinking outside the box
            and being open to new ideas will get you very far. Additionally, a basic understanding
            of machine learning fundamentals and a conceptual knowledge of major developments in
            the AI field within the last 5 to 10 years will help you better understand the
            content and lessons introduced in the program.
          </p>
          <h4>
            <u>Apply</u>
          </h4>
          <p>
            Applications are open!
            Deadline to apply is September 27, 11:59 pm
            Acceptances released by October 1, 11:59 pm
            Apply Here: https://airtable.com/shr5yCUNXsBScIEcK
          </p>
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
