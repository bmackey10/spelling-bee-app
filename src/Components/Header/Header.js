import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { checkUser, logoutUser } from "../Auth/AuthService";
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
    logoutUser().then(() => {
      setIsAuthenticated(false);
      navigate('/auth');
    }).catch((error) => {
      console.error('Logout failed: ', error);
    });
  };

  return (
    <header className="bg-bee-yellow">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div style={{ flex: 1 }}></div>

        <Link to="/" className="text-sm font-semibold leading-6 text-gray-900 flex flex-row items-center justify-center" style={{ flex: 2 }}>
          <h1 className="text-xl font-zilla-slab">Mary and Brooke's Spelling Bee</h1>
          <img className="h-6 w-auto" src={SpellingBeeCardIcon} alt="" />
        </Link>

        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
          {isAuthenticated && (
            <button onClick={handleLogout} className="border-2 border-black bg-black hover:bg-bee-yellow text-white hover:text-black rounded-full px-2 sm:px-8 py-2 text-sm font-semibold">
              Log Out
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
