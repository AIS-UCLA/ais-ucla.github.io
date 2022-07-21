import Layout from '../components/Layout';
import Section from '../components/Section';
import { useMediaQuery } from 'react-responsive'

const TerrainGenerationUrl = '/terraingeneration1.html';

import { CaretDownFill } from 'react-bootstrap-icons';

type IntroCardProps = {
  title: string,
  children: React.ReactNode
}

const IntroCard: React.FunctionComponent<IntroCardProps> = props =>
  <div className="card" style={{ width: "15rem" }}>
    <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <div className="card-text">{props.children}</div>
    </div>
  </div>


const Home = () =>
  <Layout>
    <div className="min-vh-100 d-flex justify-content-center flex-wrap">
    </div>
    <div id="content" className="container">
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
        <ul>
          <li><a href="https://github.com/pimpale/">Github</a></li>
          <li><a href="https://www.linkedin.com/in/govind-pimpale/">LinkedIn</a></li>
        </ul>
        <h5>Projects</h5>
        <p>
          Most of my projects are licensed permissively, usually under MIT or the Unlicense. If they're not on the site,
          you can find them <a href="https://github.com/pimpale/">here</a>. You can also follow me on github to keep up to date on their development.
        </p>
        <h5>Site</h5>
        <p>
          This site was made
          using <a href="https://reactjs.org/">ReactJS</a> and <a href="https://www.typescriptlang.org/">Typescript</a>,
          with the animations in <a href="https://threejs.org/">three.js</a>.
          All content on this site is licensed under the MIT license unless otherwise specified.
          The source of this website can be found <a href="https://github.com/pimpale/pimpale.github.io">here</a>.
        </p>
      </Section>
      <Section id="innexgo" name="Innexgo">
        <p>
          In 2018 I helped create Innexgo, an open source student attendance system. Innexgo uses RFID stickers to automatically take
          attendance without wasting student or teacher time and provides data analysis tools for converting raw attendance data to useful
          graphs and statistics.
        </p>
        <p>
          <a href="https://innexgo.com">Company Website</a>
          <br />
          <a href="https://github.com/innexgo">Source Code</a>
        </p>
      </Section>
      <Section id="achernar" name="Achernar">
        <h5>Goals</h5>
        Achernar is a <b><i>Work In Progress</i></b> programming language focusing on:
        <ul>
          <li>
            <b>Minimalism</b>: Achernar strives to be <i>orthogonal</i>.
            Language features are simple to understand, independent, and highly composable.
            As such, minimalism is both possible and ergonomic.
          </li>
          <li><b>Versatility</b>: Achernar does not lock the user into any particular framework and is highly unopinionated.
            Use Achernar compiled or interpreted. It can be easily dropped into any existing project without dragging in any dependencies.
          </li>
          <li><b>Safe</b>: Achernar is designed with type safety in mind. It is strongly typed and offers additional Ada
            style contract programming.
          </li>
        </ul>
        <h5>Current Status</h5>
        <p>
          I am currently about 50% through writing the first compiler in C that will compile Achernar code.
          The compiler uses its own custom standard library called <code>comlib</code> that will evolve into Achernar's standard library.
        </p>
        <h5>Additional Information</h5>
        <p>
          <a href="https://github.com/pimpale/achernar">Achernar Source Code</a>
          <br />
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
    <Home/>
  </React.StrictMode>,
  document.getElementById('root')
);


