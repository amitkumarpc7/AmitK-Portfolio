import React, { useEffect, useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import CV from "../../src/assets/AmitKCV.pdf";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);
  return (
    <>
      <nav className="top-0 z-50 mb-20 flex items-center justify-between px-3 py-5">
        {/* Logo */}
        <div className="flex flex-shrink-0 items-center">
          <span className="mx-2 w-10 text-3xl text-purple-700 font-bold hover:scale-110 transition-transform duration-300 cursor-default">
            AC
          </span>
        </div>

        {/* Menu Icon (Mobile) */}
        <div className="md:hidden">
          {menuOpen ? (
            <IoClose
              className=" hover:text-purple-700 hover:scale-110 transition-transform duration-300"
              size={30}
              onClick={handleMenuToggle}
            />
          ) : (
            <TiThMenu
              className="hover:text-purple-700 hover:scale-110 transition-transform duration-300"
              size={30}
              onClick={handleMenuToggle}
            />
          )}
        </div>

        {/* Contents (Desktop) */}
        <div className="hidden md:flex flex-grow justify-center">
          <div className="flex items-center justify-center bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent">
            <ul className="flex items-center justify-center gap-5">
              <li>
                <a
                  href="#Home"
                  className="hover:text-white text-md transition-all duration-300 p-1 md:p-0"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#About"
                  className="hover:text-white text-md transition-all duration-300 p-1 md:p-0"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="#Skills"
                  className="hover:text-white text-md transition-all duration-300 p-1 md:p-0"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#Experience"
                  className="hover:text-white text-md transition-all duration-300 p-1 md:p-0"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#Projects"
                  className="hover:text-white text-md transition-all duration-300 p-1 md:p-0"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#Contact"
                  className="hover:text-white text-md transition-all duration-300 p-1 md:p-0"
                >
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Desktop Resume */}
        <div className="hidden md:flex items-center justify-center hover:bg-white p-2 rounded-lg">
          <a
            href={CV}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500"
            download="AmitCV.pdf"
          >
            <h2 className="text-transparent bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 hover:text-purple-900 bg-clip-text hover:bg-white text-center">
              Resume
            </h2>
          </a>
        </div>
        {/* Mobile Screen */}
        <div
          style={{ transition: "transform 0.3s ease,opacity 0.3s ease" }} // Apply transition to transform
          className={`md:hidden fixed inset-0 top-16 left-0 w-full h-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-30%,rgba(120,119,198,0.3),rgba(255,255,255,0))] transition-transform transform ${
            menuOpen ? "opacity-100" : "opacity-0"
          } flex justify-center items-center z-50`}
        >
          <div className="text-center">
            <ul className="space-y-4">
              <li>
                <a
                  href="#Home"
                  className="text-white text-lg hover:text-purple-500 hover:font-bold"
                  onClick={handleMenuToggle}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#About"
                  className="text-white text-lg hover:text-purple-500 hover:font-bold"
                  onClick={handleMenuToggle}
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="#Skills"
                  className="text-white text-lg hover:text-purple-500 hover:font-bold"
                  onClick={handleMenuToggle}
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#Experience"
                  className="text-white text-lg hover:text-purple-500 hover:font-bold"
                  onClick={handleMenuToggle}
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#Projects"
                  className="text-white text-lg hover:text-purple-500 hover:font-bold"
                  onClick={handleMenuToggle}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#Contact"
                  className="text-white text-lg hover:text-purple-500 hover:font-bold"
                  onClick={handleMenuToggle}
                >
                  Contact Me
                </a>
              </li>
              <li>
                <a
                  href={CV}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-lg hover:text-purple-500 hover:font-bold"
                  download="AmitCV.pdf"
                >Resume</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
