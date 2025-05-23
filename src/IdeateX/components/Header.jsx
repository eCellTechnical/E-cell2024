import { useState, useEffect } from "react";
import { Menu, X, User, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import endeavourLogo from "../../assets/end2.png";
import Kiet from "../../assets/KIET Logo.png"

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check on initial load
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const login = (token) => {
    localStorage.setItem('token', token);
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    setIsLoggedIn(false);
  };

  return { isLoggedIn, login, logout };
};

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isLoggedIn, logout } = useAuth(); // Use the custom hook
  const navigate = useNavigate();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    logout(); // Use the logout function from the hook
    navigate('/endeavour');
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  const navigateToProfile = () => {
    navigate('/endeavour/profile');
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="fixed top-0 z-40 w-full flex justify-center items-center mt-2">
      <div className="flex items-center px-4 md:px-6 py-2 w-[90%] border-solid border-[#007827] border-2 h-[8vh] md:h-[10vh] rounded-lg bg-black bg-opacity-80 backdrop-blur-md">
        <div className="flex items-center justify-between w-full">
          
          <div className="flex gap-4 items-center">
          <Link to="/endeavour">
              <img
                src={Kiet || "end2.png"}
                className="w-28  z-20 cursor-pointer"
                alt="Kiet logo"
              />
            </Link>
            <Link to="/endeavour">
              <img
                src={endeavourLogo || "end2.png"}
                className="md:w-12 h-8 lg:w-56 bg-black lg:h-10 z-20 cursor-pointer"
                alt="Endeavour logo"
              />
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex justify-end items-center gap-6 w-[70%]">
            <a href="/endeavour" className="font-semibold text-white hover:text-[#00f699] transition-colors">
              HOME
            </a>
            {/* <a
              href="/endeavour#about"
              className="font-semibold text-white hover:text-[#00f699] transition-colors"
            >
              ABOUT US
            </a> */}
            <a
              href="/endeavour/events"
              className="font-semibold text-white hover:text-[#00f699] transition-colors"
            >
              EVENTS
            </a>
            <a
              href="/endeavour#speakers"
              className="font-semibold text-white hover:text-[#00f699] transition-colors"
            >
              SPEAKERS
            </a>
            <a
              href="/endeavour#sponsors"
              className="font-semibold text-white hover:text-[#00f699] transition-colors"
            >
              SPONSORS
            </a>
            <a
              href="/endeavour/eve"
              className="font-semibold text-white hover:text-[#00f699] transition-colors"
            >
             ENTERTAINMENT EVE
            </a>
            
            <div className="flex items-center gap-3">
              {isLoggedIn ? (
                <>
                  <button
                    onClick={navigateToProfile}
                    className="bg-transparent font-semibold p-2 rounded-lg border-2 border-[#00f8bd] text-white hover:bg-[#00f8bd] hover:text-black transition-colors"
                  >
                    <User size={20} />
                  </button>
                  <button
                    onClick={handleLogout}
                    className="bg-[#00f8bd] font-semibold p-2 rounded-lg border-2 border-[#00f8bd] text-black hover:bg-transparent hover:text-[#00f8bd] transition-colors"
                  >
                    <LogOut size={20} />
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/endeavour/login"
                    className="bg-transparent font-semibold py-2 px-4 rounded-lg border-2 border-[#00f8bd] text-white hover:bg-[#00f8bd] hover:text-black transition-colors"
                  >
                    Log In
                  </Link>
                  <Link
                    to="endeavour/register"
                    className="bg-[#00f8bd] font-semibold py-2 px-4 rounded-lg border-2 border-[#00f8bd] text-black hover:bg-transparent hover:text-[#00f8bd] transition-colors"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Mobile Menu Icon */}
          <div className="flex md:hidden">
            <button onClick={toggleMenu} className="text-[#00f8bd]">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Full-Screen Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center transition-all duration-300 backdrop-blur-md">
          <button
            onClick={toggleMenu}
            className="absolute top-8 right-8 text-[#00f8bd]"
          >
            <X size={28} />
          </button>
          <nav className="flex flex-col items-center space-y-6 mt-8">
            <a
              href="/endeavour"
              onClick={toggleMenu}
              className="text-white font-semibold text-xl hover:text-[#00f699]"
            >
              HOME
            </a>
            {/* <a
              href="/endeavour#about"
              onClick={toggleMenu}
              className="text-white font-semibold text-xl hover:text-[#00f699]"
            >
              ABOUT US
            </a> */}
            <a
              href="/endeavour/events"
              onClick={toggleMenu}
              className="text-white font-semibold text-xl hover:text-[#00f699]"
            >
              EVENTS
            </a>
            <a
              href="/endeavour#speakers"
              onClick={toggleMenu}
              className="text-white font-semibold text-xl hover:text-[#00f699]"
            >
              SPEAKERS
            </a>
            <a
              href="/endeavour#sponsors"
              onClick={toggleMenu}
              className="text-white font-semibold text-xl hover:text-[#00f699]"
            >
              SPONSORS
            </a>
            <a
              href="/endeavour/eve"
              onClick={toggleMenu}
              className="text-white font-semibold text-xl hover:text-[#00f699]"
            >
              ENTERTAINMENT EVE
            </a>
          </nav>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            {isLoggedIn ? (
              <>
                <button
                  onClick={navigateToProfile}
                  className="flex items-center justify-center gap-2 bg-transparent text-white font-semibold py-2 px-6 rounded-lg border-2 border-[#00f8bd] hover:bg-[#00f8bd] hover:text-black w-full transition-colors"
                >
                  <User size={20} /> Profile
                </button>
                <button
                  onClick={handleLogout}
                  className="flex items-center justify-center gap-2 bg-[#00f8bd] text-black font-semibold py-2 px-6 rounded-lg border-2 border-[#00f8bd] hover:bg-transparent hover:text-[#00f8bd] w-full transition-colors"
                >
                  <LogOut size={20} /> Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/endeavour/login">
                  <button
                    onClick={toggleMenu}
                    className="bg-transparent text-white font-semibold py-2 px-6 rounded-lg border-2 border-[#00f8bd] hover:bg-[#00f8bd] hover:text-black w-full transition-colors"
                  >
                    Log In
                  </button>
                </Link>
                <Link to="/endeavour/register">
                  <button
                    onClick={toggleMenu}
                    className="bg-[#00f8bd] text-black font-semibold py-2 px-6 rounded-lg border-2 border-[#00f8bd] hover:bg-transparent hover:text-[#00f8bd] w-full transition-colors"
                  >
                    Sign Up
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;