import React from 'react';
import Home from './home.js';
import Greetings from './greetings.js';
import Work from './work.js';
import Footer from './footer.js';
import Projects from './Projects/Projects';

import './App.css';

import { Button, Header, Drawer, Layout, Navigation, Content} from 'react-mdl';

function App() {
  return (
    <div className="App">
    <Layout>
        <Drawer title="Menu">
            <Navigation>
              {/* <a class="mdl-navigation__link" href="">Link</a> */}
                <a class="mdl-navigation__link" href="Home">Home </a>
                <a class="mdl-navigation__link" href="">Greetings</a>
                <a href="mdl-navigation__link" href="work">Work</a>
                <a href="mdl-navigation__link" href="">contact</a>
            </Navigation>
        </Drawer>
            <Home/>
            <Greetings/>
            <div id="work"><Projects id="work"/></div>
            <div id="contact"><Footer id="contact"/></div>
    </Layout>
    </div>
  );
}

export default App;
