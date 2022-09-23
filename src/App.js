import "./App.scss";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Information from "./components/Information/Information";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div className="app">
            <Header />
                <Main className="app__col" />
                <Information className="app__col"/>
                <Projects className="app__col"/>
            <Footer />
        </div>
    );
}

export default App;
