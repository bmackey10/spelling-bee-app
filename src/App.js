import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import * as Env from "./environments";
import Header from "./Components/Header/Header.js";
import AuthModule from "./Components/Auth/Auth.js";
import AuthRegister from "./Components/Auth/AuthRegister";
import AuthLogin from "./Components/Auth/AuthLogin";
import Home from "./Components/Pages/Home.js";
import Play from "./Components/Pages/Play.js";
import SpellingBee from "./Components/Pages/SpellingBee.js";
import ProtectedRoute from "./Components/Pages/ProtectedRoute.js";
import Parse from "parse";

Parse.initialize(Env.APPLICATION_ID, Env.JAVASCRIPT_KEY);
Parse.serverURL = Env.SERVER_URL;

const App = () => {
  return (
    <div className="h-screen">
    <Router>
      <Header />
      <Routes>
        <Route path="/auth" element={<AuthModule />} />
        <Route path="/auth/register" element={<AuthRegister />} />
        <Route path="/auth/login" element={<AuthLogin />} />
        <Route path="/" element={<ProtectedRoute path="/" element={Home} />} />
        <Route path="/play" element={<ProtectedRoute path="/" element={Play} />} />
        <Route path="/spelling-bee/:beeId" element={<ProtectedRoute path="/" element={SpellingBee} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
    </div>
  )
}

export default App;
