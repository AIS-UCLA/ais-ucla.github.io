import Layout from '../components/Layout';
import Section from '../components/Section';
import { useMediaQuery } from 'react-responsive'

import { CaretDownFill } from 'react-bootstrap-icons';

const Main = () =>
  <Layout>
    <div id="content" className="container">
    <div id="black"></div>
      <Section id="about" name="About">
        <h5>What we do...</h5>
        <p>
        We are a UCLA club invested in the development of safe and robust AI systems.
        AI Safety at UCLA provides a wide range of opportunities for students of all backgrounds
         to become involved in the AI Safety community.
 <a
            href="https://globalprioritiesinstitute.org/summary-the-case-for-strong-longtermism/">
             [link to get involved]
          </a>

        </p>
      </Section>
      <Section id="information" name="What we do text">
        <h4>What we're currently working on...</h4>
        <p>
          text
        </p>
        <h4>Some projects we've worked on in the past</h4>
        <p>
          text
        </p>
      </Section>

      <Section id="join" name="Get Involved">
        <h4>Call to Action</h4>
        <p>call to action</p>
        <p>apply to do research</p>
        <p>newsletter signup</p>
        <p>link to get involved</p>
        <button/>
      </Section>

      <Section id="contact" name="Contact">
        <h4>Questions?</h4>
        <p>contact us:</p>
        <button/>
      </Section>
    </div>
  </Layout>

import React from 'react';
import { createRoot } from 'react-dom/client';

import ReactDOM from 'react-dom';

// Bootstrap CSS & JS
import '../styles/style.scss';
import 'bootstrap/dist/js/bootstrap';

ReactDOM.render(
  <React.StrictMode>
    <Main/>
  </React.StrictMode>,
  document.getElementById('root')
);
