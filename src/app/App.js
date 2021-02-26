import './App.scss';
import Circles from './../components/decoration/Circles';
import Header from './../components/header/Header';
import About from './../components/about/About';
import Social from './../components/social/Social';

function App() {

  function initTheme() {
    const prefersDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");
    if (localStorage.getItem("tim0.theme") !== "") {
      document.body.classList.add(localStorage.getItem("tim0.theme"));
    } else {
      localStorage.setItem("tim0.theme", "dark-theme");
      document.body.classList.add("dark-theme");
    }
  }

  const components = [
    <Header key={ 1 } />,
    <About key={ 2 } />,
    <Social key={ 3 } />
    //<section key={ 33 } style={{ height: '100vh' }}/>
  ]

  initTheme();
  return (
    <div className="app">
      <div className="decoration" style={{ height: `${components.length * 100}vh` }} >
        <Circles height={ components.length * 100 }/>
      </div>
      { components }
    </div>
  );
}

export default App;
