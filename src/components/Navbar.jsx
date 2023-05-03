import React, { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState("");
  const navbarHandler = () => {
    if (nav) {
      setNav("");
    } else {
      setNav("active");
    }
  };

  return (
    <>
      <header className="header" data-header>
        <div className="container">
          <a href="#">
            <img
              src="/assets/images/logo.png"
              width="70"
              height="70"
              alt="home"
              className="logo-small"
            />
          </a>
          <nav className={`navbar ${nav}`}>
            <ul className="navbar-list">
              <li>
                <a href="#" className="navbar-link label-lg link:hover">
                  Home
                </a>
              </li>

              <li>
                <a href="#" className="navbar-link label-lg link:hover">
                  Explore
                </a>
              </li>

              <li>
                <a href="#" className="navbar-link label-lg link:hover">
                  Wallet
                </a>
              </li>

              <li>
                <a href="#" className="navbar-link label-lg link:hover">
                  About Us
                </a>
              </li>

              <li>
                <a href="#" className="navbar-link label-lg link:hover">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <div className="header-action">
            <button
              className="btn-icon profil-btn"
              aria-label="Metalink account: Fiona doe"
            >
              <img
                src="/assets/images/profile.jpeg"
                width="50"
                height="50"
                alt="Fiona doe"
                className="img-cover"
              />
            </button>

           
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;