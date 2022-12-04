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
        <h4>Define, Design, and Align</h4>
        <p>
          Define, Design, and Align is an intensive intercollegiate alignment workshop taking place from January 6th to January 8th in Los Angeles.
        </p>
        <p>
          You will collaborate with other talented students interested in AI safety to try and solve open problems in alignment
          and develop actionable research agendas. Particularly good proposals have the potential to earn a cash prize from MIRI.
        </p>
        <p>
          Apply <a href="https://airtable.com/shr4ULQzURSA9TkO1">here</a> by December 25th.
        </p>
        <p>
        </p>
        <p>
          We can help reimburse your travel expenses,
          contact <a href="mailto:aisafety.ucla@gmail.com">aisafety.ucla@gmail.com</a> if you have questions about our policy.
        </p>
        <p>
          <b>When</b>: January 6 - January 8, 2023
        </p>
        <p>
          <b>Where</b>: Los Angeles (address will be sent in acceptance email)
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
