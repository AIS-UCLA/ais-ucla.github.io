import { useMediaQuery } from "react-responsive";
import Layout from "../components/Layout";
import Section from "../components/Section";

import { CaretDownFill } from "react-bootstrap-icons";
import Banner from "../assets/banner.png";

const Contact = () => (
  <Layout>
    <div id="content" className="container">
      <Section id="board" name="Board">
        <p>
          <b>Govind Pimpale</b> - Founder and President
        </p>
        <ul>
          <li>Special Interests: Reinforcement Learning, Z3, Proof Solvers, Cybersecurity, Linux</li>
          <li>Discord: `i use arch btw#9204`</li>
          <li>Email: gpimpale29@gmail.com</li>
        </ul>

        <p>
          <b>Aiden Ament</b> - Founder and Fellowship Director
        </p>
        <ul>
          <li>Special Interests: Out of Distribution detection, ML Research, general mathematics</li>
          <li>Email: Aidenament888@gmail.com</li>
        </ul>
        <p>
          <b>Sophia Chen</b> - Board Member
        </p>
        <p>
          <b>Mario Peng</b> - Founder and NLP Research Director
        </p>
        <ul>
          <li>Special Interests: Out of Distribution detection, ML Research, general mathematics</li>
          <li>Email: Aidenament888@gmail.com</li>
        </ul>
        <p>
          <b>Tejas Kamtam</b> - Board Member
        </p>
      </Section>
      <Section id="contact" name="Contact Info">
        <p>
          <b>Email</b> - <a href="mailto:aisafety.ucla@gmail.com">aisafety.ucla@gmail.com</a>
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
    <Contact />
  </React.StrictMode>
);
