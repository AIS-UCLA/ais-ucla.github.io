import format from "date-fns/format";
import parse from "date-fns/parse";
import { useMediaQuery } from "react-responsive";
import Layout from "../components/Layout";
import Section from "../components/Section";

import { CaretDownFill } from "react-bootstrap-icons";
import HrefLink from "../components/HrefLink";

import CriticaScreenshot from "../assets/projects/critica.png";

type ToggleableImageListProps = {
  children: React.ReactNode[],
}

const ToggleableImageList = (props: ToggleableImageListProps) => {
  const [expanded, setExpanded] = React.useState(false);

  const expandedStyle = {
  }

  const opacity = 0.0;

  const compressedStyle = {
    overflow: "hidden" as const,
    maxHeight: "10rem",
    mask: `linear-gradient(180deg, black, rgba(255, 255, 255, ${opacity})) center bottom/100% 5rem no-repeat, linear-gradient(180deg, black, black) center top/100% calc(100% - 5rem) no-repeat`,
    WebkitMask: `linear-gradient(180deg, black, rgba(255, 255, 255, ${opacity})) center bottom/100% 5rem no-repeat, linear-gradient(180deg, black, black) center top/100% calc(100% - 5rem) no-repeat`
  }

  return <div className="text-center">
    <div
      className="row g-3"
      style={expanded ? expandedStyle : compressedStyle}
      onClick={() => setExpanded(true)}
    >
      {props.children.map((c, i) => <div key={i} className="col d-flex justify-content-center">{c}</div>)}
    </div>
    <button className='btn btn-primary' onClick={() => setExpanded(!expanded)}>{expanded ? "Hide" : "Show"}</button>
  </div>
}


type ProjectProps = {
  id: string,
  title: string,
  blurb: string,
  explanation?: React.ReactNode,
  begindate: Date,
  enddate?: Date,
  links: { key: string, url: string }[],
  images?: React.ReactNode[],
}

const Project = (props: ProjectProps) =>
  <Section id={props.id} name={props.title}>
    <p>{props.blurb}</p>
    {props.enddate !== undefined
      ? <p><strong>Date: </strong>{format(props.begindate, "MMM y")} to {format(props.enddate, "MMM y")}</p>
      : <p><strong>Date: </strong>{format(props.begindate, "MMM y")} to present</p>
    }
    {props.explanation}
    <h5>Links</h5>
    <ul>
      {props.links.map(({ key, url }, i) => <li key={i}>{key}: <HrefLink href={url} /></li>)}
    </ul>
    {props.images !== undefined
      ? <>
        <h5>Screenshots</h5>
        <ToggleableImageList children={props.images} />
      </>
      : null
    }
  </Section>





const Home = () => (
  <Layout>
    <div id="content" className="container">
      <Section id="about" name="About">
        <p>
          We believe projects are one of the best ways to gain experience and connect with other members of the community.
          After completing the intro program, we hope that everyone will have the chance to be working on either individual or group projects.
        </p>
        <p>
          Projects conducted in conjunction with the AI Safety Club will receive:
        </p>
        <ul>
          <li>
            <b>Mentorship</b> - We can help you solve your problems if your project is machine learning, statistics, and math projects. If your problem is very niche, we can connect you with people outside the club who can provide you advice.
          </li>
          <li>
            <b>Compute</b> - If you need to train a large machine learning model, AI Safety can help you get access to servers where you can train.
          </li>
          <li>
            <b>Funding</b> - If your project needs funding in order to say, recruit MTurk workers, or to use the OpenAI API, we may be able to provide you with some funding.
          </li>
        </ul>
        <p>
          We’re interested in a broad variety of projects. Our only criteria is that a project must:
        </p>
        <ul>
          <li>
            <b>Relate to AI Safety</b> - There's a lot of flexibility here:
            You can make a software project on technical topics like interpretability or robustness, or do research on AI
            timelines, or use AI to build a useful app or product.
            If you're not sure, feel free to apply anyway and we can discuss if it is.
          </li>
          <li>
            <b>Be good for the world</b> - Don't research how to create a murder robot or anything like that.
          </li>
        </ul>
      </Section>
      <Section id="proposal" name="Project Proposal">
        <p>
          We are excited to support you in pursuing AI safety research!
          If you have an AI safety research project you are interested in, please fill out the project proposal form!
        </p>
        <p>
          <b>Apply Here</b>: <HrefLink href="https://airtable.com/shr9qTP5wgMevAY9e" />
        </p>
      </Section>
      <Section id="pastprojects" name="Past Projects">
      </Section>
      <Project
        id="critica"
        title="Critica"
        blurb="Test your critical reading skills by trying to distinguish between GPT3 completed text and the real thing"
        begindate={parse("Mar 2022", "MMM y", new Date())}
        enddate={parse("Jun 2022", "MMM y", new Date())}
        explanation={<>
          <p>
            Oftentimes, when we skim an article, we fail to engage with the actual point of the text, simply reading the words without really understanding them.
            GPT3 is a large language model that is notorious for this as well.
            It has no "real" understanding of anything, but is an expert at writing plausible sounding continuations of any text.
          </p>
          <p>
            Critica forces the reader to discriminate between 3 AI generated distractors and 1 true article completion in order to keep reading the article.
            In doing so, we hope to ensure that the reader knows what's really going on in the article.
          </p>
        </>}
        images={[
          <img src={CriticaScreenshot} className="border border-dark w-100" alt="Demo of Critica" />
        ]}
        links={[
          { key: "Demo", url: "https://critica.ais-ucla.org" },
          { key: "Source code", url: "https://github.com/ais-ucla/critica" },
          { key: "Inspired by", url: "https://www.gwern.net/Fake-Journal-Club" },
        ]}
      />
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
