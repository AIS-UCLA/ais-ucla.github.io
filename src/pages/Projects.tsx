import { format, parse } from "date-fns";
import { useMediaQuery } from "react-responsive";
import Layout from "../components/Layout";
import Section from "../components/Section";

import { CaretDownFill } from "react-bootstrap-icons";
import HrefLink from "../components/HrefLink";

import MetadriveWebm from '../assets/projects/metadrive/scenario_0_closed_loop.webm';
import AlphazeroWebm from '../assets/projects/alphazero/alphazero.webm';
import AmogusWebm from '../assets/projects/omegasus/amogus.webm';
import MoyaiWebm from '../assets/projects/neural-cellular-automaton/moyai.webm';
import CriticaScreenshot from "../assets/projects/critica/critica.png";

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
    maxHeight: "30rem",
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
    <button className='btn btn-primary mt-4' onClick={() => setExpanded(!expanded)}>{
      expanded
        ? "Collapse"
        : "Show"
    }</button>
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
          We're interested in a broad variety of projects. Our only criteria is that a project must:
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
      <Section id="pastprojects" name="Past Projects">
        <Project
          id="metadrive"
          title="Metadrive"
          blurb="Reinforcement Learning to Drive a Car"
          begindate={parse("Mar 2023", "MMM y", new Date())}
          enddate={parse("Jun 2023", "MMM y", new Date())}
          explanation={<>
            <p>
              In 2023, AI Safety at UCLA members trained a Reinforcement Learning agent to drive a car using
              the Metadrive driving simulator.
            </p>
            <p>
              We worked in conjunction with Prof. Bolei Zhou's lab to develop these tutorials.
            </p>
          </>}
          images={[
            <video src={MetadriveWebm} muted autoPlay controls className="border border-dark w-50" />
          ]}
          links={[
            { key: "Source code", url: "https://github.com/pimpale/mdt" },
          ]}
        />
        <Project
          id="alphazero"
          title="Alpha Zero Connect4"
          blurb="We ran a tournament to design AI algorithms that played Connect4."
          begindate={parse("Mar 2023", "MMM y", new Date())}
          enddate={parse("Jun 2023", "MMM y", new Date())}
          explanation={<>
            <p>
              In 2023, we ran a tournament to design AI algorithms that played Connect4.
              An implementation of Deepmind's <a href="https://en.wikipedia.org/wiki/AlphaZero">AlphaZero</a> algorithm was the winner!
            </p>
          </>}
          images={[
            <video src={AlphazeroWebm} muted autoPlay controls className="border border-dark w-75" />
          ]}
          links={[
            { key: "Source code", url: "https://github.com/wz-ml/A0-Connect4" },
          ]}
        />
        <Project
          id="omegasus"
          title="OmegaSUS"
          blurb="Building an Among Us Bot using Reinforcement Learning"
          begindate={parse("Mar 2023", "MMM y", new Date())}
          enddate={parse("Jun 2023", "MMM y", new Date())}
          explanation={<>
            <p>
              In this work, we simulate the popular online multi-player game 'Among Us'.
              Inspired by works like CICERO, we use multiple models to tackle different parts of a full game.
            </p>
          </>}
          images={[
            <video src={AmogusWebm} muted autoPlay controls className="border border-dark w-50" />
          ]}
          links={[
            { key: "Source code", url: "https://github.com/pimpale/omegasus" },
          ]}
        />
        <Project
          id="omegasus"
          title="Neural Cellular Automata"
          blurb="Growing a Moyai from a single pixel."
          begindate={parse("Mar 2023", "MMM y", new Date())}
          enddate={parse("Jun 2023", "MMM y", new Date())}
          explanation={<>
            <p>
              This project, created by one of our members, implements a neural network cellular automaton from the paper <HrefLink href="https://distill.pub/2020/growing-ca/" />.
              It's able to grow a 🗿 from scratch.
            </p>
          </>}
          images={[
            <video src={MoyaiWebm} muted autoPlay controls className="border border-dark w-50" />
          ]}
          links={[
            { key: "Source code", url: "https://github.com/wz-ml/A0-Connect4" },
          ]}
        />
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
      </Section>
    </div>
  </Layout >
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
