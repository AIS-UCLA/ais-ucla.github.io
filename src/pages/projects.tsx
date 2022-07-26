import Layout from '../components/Layout';
import Section from '../components/Section';
import { useMediaQuery } from 'react-responsive'

import { CaretDownFill } from 'react-bootstrap-icons';

const Main = () =>
  <Layout>
    <div id="content" className="container">
    <div id="black"></div>
      <Section id="projects" name="Projects">
        <h5>Stuff we're working on...</h5>
        <p>
        lol

        </p>
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
