import "./App.css";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import * as Env from "./environments";
import Header from "./Components/Header/Header.js";
import AuthModule from "./Components/Auth/Auth.js";
import AuthRegister from "./Components/Auth/AuthRegister";
import AuthLogin from "./Components/Auth/AuthLogin";
import HowToPlay from "./Components/Pages/HowToPlay";
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
                    <Route path="/how-to-play" element={<ProtectedRoute element={HowToPlay} />}/>
                    <Route
                        path="/"
                        element={<ProtectedRoute element={Home} />}
                    />
                    <Route
                        path="/play"
                        element={<ProtectedRoute element={Play} />}
                    />
                    <Route
                        path="/spelling-bee/:beeId"
                        element={<ProtectedRoute element={SpellingBee} />}
                    />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </Router>
        </div>
    );
};

export default App;
