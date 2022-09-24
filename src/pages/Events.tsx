import { useMediaQuery } from "react-responsive";
import Layout from "../components/Layout";
import Section from "../components/Section";

import { CaretDownFill } from "react-bootstrap-icons";
import Banner from "../assets/banner.png";

const Home = () => (
  <Layout>
    <div id="content" className="container">
      <Section id="events" name="Events">
        <h4>Weekly Social and Dinner</h4>
        <p>
          Join us every Tuesday at 4:30 PM for weekly dinners!
          This is a great opportunity to meet and socialize with other members and is lots of fun;
          we provide a variety of games, puzzles, and questions to solve each week.
          Dinner starts at 5:00 and is thrown in collaboration with the Effective Altruism club, so all food provided will be vegan.
          We look forward to seeing you there!
        </p>
        <p>
          <b>When</b>: Tuesday, 4:30 PM Weekly
        </p>
        <p>
          <b>Where</b>: Grass next to Tongva Steps
        </p>
        <h4>AI Movie Marathon</h4>
        <p>
          To get in the Halloween spirit, we’re hosting an AI movie marathon.
          Come join us in binge watching Sci-Fi movies which highlight the dangers of AI.
          Food and snacks will be provided, but we’re still deciding on movies.
          We’d love to hear your recommendations!
        </p>
        <p>
          Potential Movies:
        </p>
        <ul>
          <li>Prometheus</li>
          <li>Her</li>
          <li>Terminator Saga</li>
          <li>Space Odyssey</li>
          <li>Upgrade</li>
          <li>Wall-E</li>
        </ul>
        <p>
          <b>Tentative Date</b>: October 20th
        </p>
        <p>
          <b>Location</b>: TBD
        </p>
        <h4>AI Timelines Workshop</h4>
        <p>
          Understanding AI timelines is crucial for predicting the future and informing your next steps.
          There is a lot of volatility in the AI community about if or when AGI will be developed,
          and we encourage our participants to engage with a variety of different perspectives in order to inform their own view.
          Students in the LA area are welcome to apply using the link below!
        </p>
        <p>
          <b>Tentative Date</b>: Saturday, November 12, 2022
        </p>
        <p>
          <b>Application Link</b>: Open Soon
        </p>
        <h4>Drink and Distill</h4>
        <p>
          Distilling complicated literature in AI safety is an invaluable exercise for you and the broader community.
          Come enjoy sunny LA weather with others in the AI safety community, and spend a weekend distilling and socializing.
          Students from all over the country are welcome to apply using the link below!
        </p>
        <p>
          <b>Tentative Date</b>: Saturday, December 10th, 2022
        </p>
        <p>
          <b>Application Link</b>: Open Soon
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
