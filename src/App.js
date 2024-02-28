import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home.js";
import CurrentBee from "./Pages/CurrentBee";
import PastBees from "./Pages/PastBees";
import Header from "./Components/Header";

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
