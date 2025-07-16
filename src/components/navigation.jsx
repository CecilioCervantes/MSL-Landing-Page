import React from "react";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            <img src="./img/logo.png" alt="Marketing Storm Leads" className="navbar-logo" />
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#features" className="page-scroll">
                WHY JOIN US
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                OUR CULTURE
              </a>
            </li>
            <li>
              <a href="#testimonials" className="page-scroll">
                Agent Stories
              </a>
            </li>
            <li>
              <a href="#team" className="page-scroll">
                <i className="fa-brands fa-whatsapp" style={{ color: 'green', marginRight: '6px' }}></i>
                <span style={{ color: 'green', fontWeight: 'bold' }}>dm</span>
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                <i className="fa-solid fa-fire" style={{ color: 'red', marginRight: '6px' }}></i>
                <span style={{ color: 'red', fontWeight: 'bold' }}>APPLY NOW</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
