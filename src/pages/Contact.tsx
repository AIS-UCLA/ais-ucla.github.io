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
          <b>Govind Pimpale</b> - Board Member
        </p>
        <p>
          <b>Aiden Ament</b> - Board Member
        </p>
        <p>
          <b>Sophia Chen</b> - Board Member
        </p>
        <p>
          <b>Mario Peng</b> - Board Member
        </p>
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
