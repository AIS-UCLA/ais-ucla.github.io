import { useMediaQuery } from "react-responsive";
import Layout from "../components/Layout";
import Section from "../components/Section";

import { CaretDownFill } from "react-bootstrap-icons";

import TerminatorPic from "../assets/flyer1/terminator_llm.png";


// Is AI an existential threat?
// Answer: We don't yet know. There's a solid chance it could be.
// 
// 1. The rate of AI progress has been astonishingly fast.
// 
// ChatGPT came out in November, and GPT-4 in March, less than 6 months later.
// We see similar massive improvements in performance with image generation technology.
// The difference between DALL-E 1 and Midjourney 5 is huge.
// 
// If the rate of progress continues, our society will have to reckon with
// an incredible shift in what kinds of jobs are available for humans to do.
// If we don't handle it right, it could lead to massive unemployment or social unrest.
// 
// Additionally, it's possible that future AIs might be smarter than us in some respects.
// Even if they're not more intelligent than us per-se, they might be able to think faster.
// In this scenario, it's critical that the AI does what we tell it to do.
// 
// But there's a hitch, and that is:
// 
//     2. We don't yet understand how to align AI with human preferences.
// 
//     Current large language models (LLMs) are mostly harmless
//     
// 
// 
// 
//     In the general case, getting a (potentially superintelligent) AI to do what we want is an open question.
// 
//     In our current paradigm of machine learning, we train neural networks to maximize their reward on a given dataset.
// 
// 
// 
// 
// 
//     3. As AI grows increasingly sophisticated, our ability to understand it decreases.
// 
// 
// 
// 
//     3.


const Flyer1 = () => (
  <Layout>
    <div id="content" className="container">
      <Section id="what" name="">
        <div className="row">
          <div className="col-lg-7">
            <img
              src={TerminatorPic}
              alt="a T800 or some crap"
              style={{ width: "100%" }}
            />
          </div>
          <div className="col-lg-5 mt-4">
            <h1>Is AI a existential threat?</h1>
            <p className="fs-5">
              <b>Answer:</b> No one knows yet. There's a solid chance it could be.
            </p>
          </div>
        </div>
        <p className="fs-4 mt-5">
          Here are some reasons:
        </p>
        <ol className="fs-5 mt-3">
          <li>
            <b className="fs-5">The rate of AI progress has been astonishingly fast</b>
            <ul>
              <li>
                ChatGPT came out in November, and GPT-4 in March, less than 6 months later.
                We see similar massive improvements in performance with image generation technology.
                The difference between DALL-E 1 and Midjourney 5 is huge.
              </li>
            </ul>


          </li>
        </ol>
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
    <Flyer1 />
  </React.StrictMode>
);
