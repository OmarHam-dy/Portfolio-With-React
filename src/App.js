import './App.css';
import About from './components/about/about';
import Footer from './components/footer/footer';
import Landing from './components/landing/landing';
import Portfolio from './components/portfolio/portfolio';
import Skills from './components/skills/skills';


function App() {
  return (
    <div className="App">
      <Landing />
      <About />
      <Skills />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
