import Layout from '../components/Layout';
import Section from '../components/Section';
import { useMediaQuery } from 'react-responsive'

import { CaretDownFill } from 'react-bootstrap-icons';

const Main = () =>
  <Layout>
    <div id="content" className="container">
    <div id="black"></div>
      <Section id="about" name="About">
        <h5>Me</h5>
        <p>
          I'm a student at UCLA, studying Computer Science and Engineering.
          I believe in <a
            href="https://globalprioritiesinstitute.org/summary-the-case-for-strong-longtermism/">
            Strong Longtermism
          </a> and the <a href="https://suckless.org/philosophy/">Suckless philosophy</a>.
          In my free time, I enjoy recreational programming (especially in C).
          I currently work at <a href="https://innexgo.com">Innexgo</a>, making educational software.
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

      <Section id="join" name="Our Team">
        <h4>button</h4>

      </Section>
      <Section id="join" name="Join Us">
        <button/>
        <p> </p>
        <h4>Contact</h4>


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
