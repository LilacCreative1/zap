import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { logout, getCurrentUser } from "../utils/auth"; // assuming you have this auth utility

function Navbar({ isAuthenticated }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    window.dispatchEvent(new Event("logout"));
    navigate("/");
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-darkBlue shadow-lg py-2" : "bg-darkBlue bg-opacity-90 py-4"}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="w-10 h-10 bg-zapYellow rounded-full flex items-center justify-center mr-2">
              <span className="text-darkBlue font-bold text-lg">ZAP</span>
            </div>
            <span className="text-white font-ibm font-bold text-xl hidden sm:inline-block">ZAP Labs</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className="nav-link text-white hover:text-zapYellow transition-colors duration-200 font-medium">
              Home
            </NavLink>

            {isAuthenticated && (
              <>
                <NavLink to="/scenarios" className="nav-link text-white hover:text-zapYellow transition-colors duration-200 font-medium">Scenarios</NavLink>
                <NavLink to="/evaluation" className="nav-link text-white hover:text-zapYellow transition-colors duration-200 font-medium">Evaluation</NavLink>
                <NavLink to="/progress" className="nav-link text-white hover:text-zapYellow transition-colors duration-200 font-medium">My Progress</NavLink>
                <NavLink to="/resources" className="nav-link text-white hover:text-zapYellow transition-colors duration-200 font-medium">Resources</NavLink>
                <NavLink to="/admin/settings" className="nav-link text-white hover:text-zapYellow transition-colors duration-200 font-medium">
                  <i className="fas fa-cog mr-1"></i> Admin
                </NavLink>
              </>
            )}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <button onClick={handleLogout} className="bg-transparent border border-zapYellow text-zapYellow hover:bg-zapYellow hover:text-darkBlue transition-colors duration-200 py-2 px-4 rounded-md font-medium">
                Logout
              </button>
            ) : (
              <Link to="/login" className="bg-zapYellow text-darkBlue hover:bg-opacity-90 transition-colors duration-200 py-2 px-4 rounded-md font-medium">
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <i className="fas fa-times text-xl"></i>
            ) : (
              <i className="fas fa-bars text-xl"></i>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? "max-h-96 pt-4" : "max-h-0"}`}>
          <div className="flex flex-col space-y-3 pb-4">
            <NavLink to="/" className="text-white hover:text-zapYellow transition-colors duration-200 py-2 font-medium">Home</NavLink>

            {isAuthenticated && (
              <>
                <NavLink to="/scenarios" className="text-white hover:text-zapYellow transition-colors duration-200 py-2 font-medium">Scenarios</NavLink>
                <NavLink to="/evaluation" className="text-white hover:text-zapYellow transition-colors duration-200 py-2 font-medium">Evaluation</NavLink>
                <NavLink to="/progress" className="text-white hover:text-zapYellow transition-colors duration-200 py-2 font-medium">My Progress</NavLink>
                <NavLink to="/resources" className="text-white hover:text-zapYellow transition-colors duration-200 py-2 font-medium">Resources</NavLink>
                <NavLink to="/admin/settings" className="text-white hover:text-zapYellow transition-colors duration-200 py-2 font-medium">
                  <i className="fas fa-cog mr-1"></i> Admin Settings
                </NavLink>
              </>
            )}

            {isAuthenticated ? (
              <button onClick={handleLogout} className="bg-transparent border border-zapYellow text-zapYellow hover:bg-zapYellow hover:text-darkBlue transition-colors duration-200 py-2 px-4 rounded-md font-medium text-left">
                Logout
              </button>
            ) : (
              <Link to="/login" className="bg-zapYellow text-darkBlue hover:bg-opacity-90 transition-colors duration-200 py-2 px-4 rounded-md font-medium inline-block">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
