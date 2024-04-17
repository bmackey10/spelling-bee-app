import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { checkUser, logoutUser } from "../Services/AuthService";
import SpellingBeeCardIcon from "../../Icons/spelling-bee-card-icon.svg";

/* Header above every page with Logout button if user is authenticated (logged in) */
const Header = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const isLoggedIn = checkUser();
        setIsAuthenticated(isLoggedIn);
    }); // Removed dependency array to check auth status on every component update

    const handleLogout = () => {
        logoutUser()
            .then(() => {
                setIsAuthenticated(false);
                navigate("/auth");
            })
            .catch((error) => {
                console.error("Logout failed: ", error);
            });
    };


    return (
        <header className="bg-bee-yellow">
            <nav className="mx-auto flex flex-col sm:flex-row max-w-7xl items-center justify-between p-6 lg:px-8">
                {isAuthenticated && (
                    <Link
                        to="/how-to-play"
                        className="text-sm text-black hover:text-gray-600 font-semibold mb-4 sm:mb-0"
                    >
                        How to Play
                    </Link>
                )}
                <div className="flex-grow flex justify-center">
                    <Link
                        to="/"
                        className="flex items-center text-xl font-bold font-zilla-slab text-black no-underline"
                    >
                        Mary and Brooke's Spelling Bee
                        <img
                            className="h-6 w-auto ml-2"
                            src={SpellingBeeCardIcon}
                            alt=""
                        />
                    </Link>
                </div>
                {isAuthenticated && (
                    <div className="flex justify-end">
                        <button
                            onClick={handleLogout}
                            className="border-2 border-black bg-black hover:bg-bee-yellow text-white hover:text-black rounded-full px-2 sm:px-8 py-2 text-sm font-semibold"
                        >
                            Log Out
                        </button>
                    </div>
                )}
            </nav>
        </header>

    );
};

export default Header;
