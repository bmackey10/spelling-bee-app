import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import * as Env from "./environments";
import Home from "./Components/Pages/Home.js";
import Header from "./Components/Header/Header.js";
import BeeList from "./Components/Pages/BeeList.js";
import Parse from "parse";

Parse.initialize(Env.APPLICATION_ID, Env.JAVASCRIPT_KEY);
Parse.serverURL = Env.SERVER_URL;

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/play" element={<BeeList />} />
      </Routes>
    </Router>
  )
}

export default App;
