import logo from './logo.svg';
import './App.scss';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Information from './components/Information/Information';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Information />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
