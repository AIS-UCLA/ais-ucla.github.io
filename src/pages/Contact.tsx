import { useMediaQuery } from "react-responsive";
import Layout from "../components/Layout";
import Section from "../components/Section";

import { CaretDownFill } from "react-bootstrap-icons";

const Contact = () => (
  <Layout>
    <div id="content" className="container">
      <Section id="board" name="Board">
        <p>
          <b>Govind Pimpale</b> - President
        </p>
        <ul>
          <li>Interests: Reinforcement Learning, Z3, Proof Solvers, Cybersecurity, Linux</li>
        </ul>
        <p>
          <b>Aiden Ament</b> - Board Member
        </p>
        <ul>
          <li>Interests: Out of Distribution detection, ML Research, general mathematics</li>
        </ul>
        <p>
          <b>Christopher Milan</b> - Board Member
        </p>
        <ul>
          <li>Interests: Computer Vision, Mathematics, Systems Programming</li>
        </ul>
        <p>
          <b>Mario Peng</b> - Board Member
        </p>
        <ul>
          <li>Interests: NLP, Semantics, Academic Research </li>
        </ul>
        <p>
          <b>Tejas Kamtam</b> - Board Member
        </p>
        <ul>
          <li>Interests: Time series forecasting, NLU, quantum computing</li>
        </ul>
        <p>
          <b>William Zhou</b> - Board Member
        </p>
        <ul>
          <li>Interests: Simulated Annealing, Kaggle, Interpretability (ML)</li>
        </ul>
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
