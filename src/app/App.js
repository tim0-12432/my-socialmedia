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
      onStartPage: true,
      headerVisible: true,
      githubData: []
    }
    this.startReadyStart = this.startReadyStart.bind(this);
    this.setOnStartPage = this.setOnStartPage.bind(this);
    this.setHeaderVisible = this.setHeaderVisible.bind(this);
  }

  async componentDidMount() {
    const fetchedGithub = await fetchGithubProjects();
    this.setState({ githubData: fetchedGithub });
  }

  startReadyStart() {
    this.setState({ startReady: true });
  }
  setOnStartPage(bool) {
    const start = this.state.headerVisible && bool;
    console.log(this.state.headerVisible, bool);
    this.setState({ onStartPage: start });
  }
  setHeaderVisible(bool) {
    this.setState({ headerVisible: bool });
  }

  render() {
    const { startReady, onStartPage, headerVisible, githubData } = this.state;

    return (
      <div className="app">
        <nav className={ styles.nav } style={{ background: onStartPage ? "transparent" : "rgba(255, 255, 255, .2)", backdropFilter: onStartPage ? "none" : "blur(20px)" }}>
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

          <Parallax.Layer offset={ 1 } speed={ 0.8 }>
            <DecorationBubble hw="20vw" mL="55%" setOnStartPage={ this.setOnStartPage } />
            <DecorationBubble hw="10vw" mL="15%" setOnStartPage={ this.setOnStartPage } />
          </Parallax.Layer>
          <Parallax.Layer offset={ 1.75 } speed={ 0.5 }>
            <DecorationBubble hw="20vw" mL="70%" setOnStartPage={ this.setOnStartPage } />
            <DecorationBubble hw="20vw" mL="40%" setOnStartPage={ this.setOnStartPage } />
          </Parallax.Layer>
          <Parallax.Layer offset={ 2 } speed={ 0.2 }>
            <DecorationBubble hw="10vw" mL="10%" setOnStartPage={ this.setOnStartPage } />
            <DecorationBubble hw="20vw" mL="75%" setOnStartPage={ this.setOnStartPage } />
          </Parallax.Layer>
          <Parallax.Layer offset={ 2.6 } speed={ -0.1 }>
            <DecorationBubble hw="20vw" mL="60%" setOnStartPage={ this.setOnStartPage } />
            <DecorationBubble hw="25vw" mL="30%" setOnStartPage={ this.setOnStartPage } />
            <DecorationBubble hw="10vw" mL="80%" setOnStartPage={ this.setOnStartPage } />
          </Parallax.Layer>
          <Parallax.Layer offset={ 3.6 } speed={ 0.4 }>
            <DecorationBubble hw="20vw" mL="5%" setOnStartPage={ this.setOnStartPage } />
            <DecorationBubble hw="15vw" mL="75%" setOnStartPage={ this.setOnStartPage } />
          </Parallax.Layer>
  
          <Parallax.Layer offset={ 0 } speed={ 0.5 } style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
            <Header setStartReady={ this.startReadyStart } setHeaderVisible={ this.setHeaderVisible } />
          </Parallax.Layer>
          <Parallax.Layer offset={ 0 } speed={ 0.1 } style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
          <div className={ styles.arrowBtn } style={{ display: `${startReady ? "flex" : "none"}` }}  onClick={() => this.parallax.scrollTo(1)}>
            <i className="fa fa-angle-double-down" aria-hidden="true" />
          </div>
          </Parallax.Layer>

          <Parallax.Layer offset={ 1 } speed={ 0.3 } style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
            <PageTitle title="About Me" />
          </Parallax.Layer>
          <Parallax.Layer offset={ 1 } speed={ 0.5 } style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
            <About data={ githubData } />
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
