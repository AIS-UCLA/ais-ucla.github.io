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
          The Intro to AI Safety Fellowship is a 7 week, quarter-long course
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
          Applications are open for Winter Quarter 2023!
        </p>
        <p>
          Applications will be processed on a rolling basis.
        </p>
        <p>
          <b>Apply Here</b>: <HrefLink href="https://airtable.com/shrlqFGBmpO1mvR1z" />
        </p>
      </Section>
      <Section id="mlab" name="MLAB Program">
        <p>
          MLAB is an intensive technical machine learning course that builds a foundation
          for advanced techniques from basic skills.
          The course was created by Redwood Research (a leading AI safety company based out of Berkeley, CA) to skill up potential AI safety researchers.
        </p>
        <p>
          This is the next step in AI Safety at UCLA.
          We recommend everyone who has completed the Intro Fellowship apply!
          Our program will consist of ~1 week's worth of MLAB 2 content over 6 weeks.
          Aiden and William will hold office hours each week as most of this course is asynchronous.
          However, weekly meetings are TBA.
        </p>
        <p>
          If you would like to continue working towards X-Risk reduction with AI safety at UCLA, please fill out the form below!
        </p>
        <p>
          <b>Apply Here</b>: <HrefLink href="https://airtable.com/shr7C4h67HP1l7eoI" />
        </p>
      </Section>
      <Section id="art" name="ART Initiative">
        <p>
          ART is our new initiative for real-world AI safety research.
          We will be forming small groups of AI Safety at UCLA fellows with organizers on an approved alignment or ethics-related AI project.
          The projects and application process will be announced next week.
          Please note that this should and will be an intensive project and will last multiple quarters.
        </p>
        <p>
          <b>Apply Here</b>: <HrefLink href="https://airtable.com/shrAL4Dus1MK6Fgxr" />
        </p>
      </Section>
      <Section id="newsletter" name="Newsletter">
        <p>
          Please sign up for our newsletter to stay up to date with events, important announcements, and interesting new papers in AI.
          We promise not to spam you!
        </p>
        <p>
          <b>Join our Newsletter</b>: <HrefLink href="https://airtable.com/shrImJ6z27mX3tkkA" />
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
      <Section id="project_proposals" name="Project Proposals">
        <p>
          If you have AI safety project ideas, we would love to hear them!
        </p>
        <p>
          <b>Project application</b>: <HrefLink href="https://airtable.com/shr9qTP5wgMevAY9e" />
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
