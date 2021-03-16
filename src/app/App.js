import React, { useState } from "react";
import Parallax from "react-springy-parallax";

import styles from "./App.module.scss";
import backgroundImage from "./../resources/images/wallpaper.jpeg";
import backgroundPattern from "./../resources/images/pattern.png";
import DecorationBubble from "../components/decoration/DecorationBubble";
import Header from "../components/header/Header";
import PageTitle from "../components/page/PageTitle";
import About from "../components/about/About";
import Social from "../components/social/Social";
import { fetchInstaPictures, fetchGithubProjects } from "../api";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startReady: false,
      instaData: [],
      githubData: []
    }
    this.startReadyStart = this.startReadyStart.bind(this);
  }

  async componentDidMount() {
    const fetchedInsta = await fetchInstaPictures();
    const fetchedGithub = await fetchGithubProjects();
    this.setState({ instaData: fetchedInsta, githubData: fetchedGithub });
  }

  startReadyStart() {
    this.setState({ startReady: true });
  }

  render() {
    const { startReady, instaData, githubData } = this.state;

    if (githubData !== undefined && githubData !== []) {
      console.log(githubData);
    }
    return (
      <div className="app">
        <nav className={ styles.nav }>
            <ul>
                <li onClick={() => this.parallax.scrollTo(0)}>Start</li>
                <li onClick={() => this.parallax.scrollTo(1)}>About Me</li>
                <li onClick={() => this.parallax.scrollTo(2)}>Socialmedia</li>
            </ul>
        </nav>
        <Parallax ref={ ref => this.parallax = ref } pages={ 3 } scrolling={ true }>
          <Parallax.Layer offset={ 0 } speed={ 0 }
              style={{ backgroundImage: `url(${backgroundImage})`, backgroundAttachment: "fixed", backgroundSize: "cover", filter: "brightness(40%)" }}
          />
          <Parallax.Layer offset={ 1 } speed={ 0 } factor={ 2 }
              style={{ backgroundColor: "#222"}}
          />
          <Parallax.Layer offset={ 1 } speed={ 0 } factor={ 2 }
              style={{ backgroundImage: `url(${backgroundPattern})`, backgroundAttachment: "none", filter: "grayscale(100%)", backgroundRepeat: "repeat", opacity: "0.3" }}
          />

          <Parallax.Layer offset={ 0.9999 } speed={ 0.5 }>
            <DecorationBubble hw="15vw" mL="10%" />
            <DecorationBubble hw="30vw" mL="65%" />
          </Parallax.Layer>
          <Parallax.Layer offset={ 1 } speed={ 0.8 }>
            <DecorationBubble hw="20vw" mL="55%" />
            <DecorationBubble hw="10vw" mL="15%" />
          </Parallax.Layer>
          <Parallax.Layer offset={ 1.75 } speed={ 0.5 }>
            <DecorationBubble hw="20vw" mL="70%" />
            <DecorationBubble hw="20vw" mL="40%" />
          </Parallax.Layer>
          <Parallax.Layer offset={ 2 } speed={ 0.2 }>
            <DecorationBubble hw="10vw" mL="10%" />
            <DecorationBubble hw="20vw" mL="75%" />
          </Parallax.Layer>
          <Parallax.Layer offset={ 2.6 } speed={ -0.1 }>
            <DecorationBubble hw="20vw" mL="60%" />
            <DecorationBubble hw="25vw" mL="30%" />
            <DecorationBubble hw="10vw" mL="80%" />
          </Parallax.Layer>
          <Parallax.Layer offset={ 3.6 } speed={ 0.4 }>
            <DecorationBubble hw="20vw" mL="5%" />
            <DecorationBubble hw="15vw" mL="75%" />
          </Parallax.Layer>
  
          <Parallax.Layer offset={ 0 } speed={ 0.5 } style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
            <Header setStartReady={ this.startReadyStart } />
          </Parallax.Layer>
          <Parallax.Layer offset={ 0 } speed={ -0.1 } style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
          <div className={ styles.arrowBtn } style={{ display: `${startReady ? "flex" : "none"}` }}  onClick={() => this.parallax.scrollTo(1)}>
            <i className="fa fa-angle-double-down" aria-hidden="true" />
          </div>
          </Parallax.Layer>

          <Parallax.Layer offset={ 1 } speed={ 0.3 } style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
            <PageTitle title="About Me" />
          </Parallax.Layer>
          <Parallax.Layer offset={ 1 } speed={ 0.5 } style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
            <About />
          </Parallax.Layer>

          <Parallax.Layer offset={ 2 } speed={ 0.3 } style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
            <PageTitle title="My Socialmedia" />
          </Parallax.Layer>
          <Parallax.Layer offset={ 2 } speed={ 0.5 } style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
            <Social />
          </Parallax.Layer>
        </Parallax>
      </div>
    );
  }
}

export default App;
