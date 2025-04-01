import { useState } from "react";
import { Menu, X } from "lucide-react"; // For menu, close, and user icons
import { Link } from "react-router-dom";
import endeavourLogo from "../../assets/End-Logo.jpg";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const navigate = useNavigate();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed top-0 z-40 w-full flex justify-center items-center mt-2">
      <div className="flex items-center px-4 md:px-6 py-2 w-[90%] border-solid border-[#007827] border-2 h-[8vh] md:h-[10vh] rounded-lg bg-black bg-opacity-80 backdrop-blur-md">
        <div className="flex items-center justify-between w-full">
          <div className="flex gap-4 items-center">
            <Link to="/endeavour">
              <img
                src={endeavourLogo || "https://firebasestorage.googleapis.com/v0/b/endevaour-2023.appspot.com/o/webassets%2Fwhite%20logo%20br.png?alt=media&token=50662b36-d955-4f24-985c-bd73a9101e01"}
                className="w-14 h-8 lg:w-44 lg:h-10 z-20 cursor-pointer"
                alt="Endeavour logo"
              />
            </Link>
            {/* <Link
              to="/"
              className="font-bold text-[#00f8bd] text-xl flex gap-2 items-center"
            >
              ENDEAVOUR
            </Link> */}
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex justify-end items-center gap-6 w-[70%]">
            <a href="/endeavour" className="font-semibold text-white hover:text-[#00f699] transition-colors">
              HOME
            </a>
            <a
              href="/endeavour#about"
              className="font-semibold text-white hover:text-[#00f699] transition-colors"
            >
              ABOUT
            </a>
            <a
              href="/#events"
              className="font-semibold text-white hover:text-[#00f699] transition-colors"
            >
              EVENTS
            </a>
            <a
              href="/#speakers"
              className="font-semibold text-white hover:text-[#00f699] transition-colors"
            >
              SPEAKERS
            </a>
            <a
              href="/#sponsors"
              className="font-semibold text-white hover:text-[#00f699] transition-colors"
            >
              SPONSORS
            </a>
            
            <div className="flex items-center gap-3">
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
              href="/"
              onClick={toggleMenu}
              className="text-white font-semibold text-xl hover:text-[#00f699]"
            >
              HOME
            </a>
            <a
              href="/#about"
              onClick={toggleMenu}
              className="text-white font-semibold text-xl hover:text-[#00f699]"
            >
              ABOUT
            </a>
            <a
              href="/#events"
              onClick={toggleMenu}
              className="text-white font-semibold text-xl hover:text-[#00f699]"
            >
              EVENTS
            </a>
            <a
              href="/#speakers"
              onClick={toggleMenu}
              className="text-white font-semibold text-xl hover:text-[#00f699]"
            >
              SPEAKERS
            </a>
            <a
              href="/#sponsors"
              onClick={toggleMenu}
              className="text-white font-semibold text-xl hover:text-[#00f699]"
            >
              SPONSORS
            </a>
          </nav>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
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
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;