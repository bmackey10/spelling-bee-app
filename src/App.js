import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import * as Env from "./environments";
import Header from "./Components/Header/Header.js";
import Home from "./Components/Pages/Home.js";
import Play from "./Components/Pages/Play.js";
import SpellingBee from "./Components/Pages/SpellingBee.js";
import Parse from "parse";

Parse.initialize(Env.APPLICATION_ID, Env.JAVASCRIPT_KEY);
Parse.serverURL = Env.SERVER_URL;

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/play" element={<Play />} />
        <Route path="/spelling-bee/:beeId" element={<SpellingBee />}>
          {/*<Route path=":beeId" element={<SpellingBee />}/>*/}
        </Route>
      </Routes>
    </Router>
  )
}

export default App;
