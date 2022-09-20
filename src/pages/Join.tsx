import { useMediaQuery } from "react-responsive";
import Layout from "../components/Layout";
import Section from "../components/Section";

import { CaretDownFill } from "react-bootstrap-icons";
import Banner from "../assets/banner.png";
import HrefLink from "../components/HrefLink";

const JoinPage = () => (
  <Layout>
    <div id="content" className="container">
      <Section id="join" name="Join">
        <h4>Intro to AI Safety Program</h4>
        <p>
          Our Intro to AI Safety program is a fantastic first step for those interested in getting involved.
          It will provide both a comprehensive background of the AI safety community as well as motivate a clear research agenda to pursue in the future quarters.
        </p>
        <p>
          Learn More: <HrefLink href="/programs.html" />
        </p>
        <p>
          Apply: <HrefLink href="https://airtable.com/shr5yCUNXsBScIEcK" />
        </p>
        <h4>Newsletter</h4>
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
        <h4>Project Proposals</h4>
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
