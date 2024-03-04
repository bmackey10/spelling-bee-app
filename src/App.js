import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
<<<<<<< HEAD
import Home from "./Pages/Home.js";
import CurrentBee from "./Pages/CurrentBee";
import PastBees from "./Pages/PastBees";
import Header from "./Components/Header";
import Parse from "parse";

Parse.initialize(Env.APPLICATION_ID, Env.JAVASCRIPT_KEY);
Parse.serverURL = Env.SERVER_URL;
=======
import Home from "./Components/Pages/Home.js";
import CurrentBee from "./Components/Pages/CurrentBee";
import PastBees from "./Components/Pages/PastBees";
import Header from "./Components/Header/Header.js";
>>>>>>> 672e0c4b3157d2b21af69e13744aed5df360c46a

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/current" element={<CurrentBee />} />
        <Route path="/past" element={<PastBees />} />
      </Routes>
    </Router>
  )
}

export default App;
