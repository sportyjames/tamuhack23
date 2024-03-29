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
            Credit Card Helper
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">

              <li>
                <a href="#about" className="page-scroll">
                <button type="button" class="btn btn-light btn-lg" data-toggle="modal">
                  About
                </button>
                </a>
              </li>

              <li>
                <a href="#table" className="page-scroll">
                <button type="button" class="btn btn-light btn-lg" data-toggle="modal">
                  Find the best card for you
                </button>
                </a>
              </li>

           

              <li>
                <a data-target="#exampleModal" className="page-scroll">
                <button type="button" class="btn btn-light btn-lg"  data-toggle="modal" data-target="#exampleModal" >
                  User Survey
                </button>
                </a>
              </li>


              
            <li>

              
            {/* <!-- Button trigger modal --> */}
              
              
            </li>
            {/* <li>
              <a href="#services" className="page-scroll">
                Services
              </a>
            </li> */}
            {/* <li>
              <a href="#portfolio" className="page-scroll">
                Gallery
              </a>
            </li> */}
            {/* <li>
              <a href="#testimonials" className="page-scroll">
                Testimonials
              </a>
            </li> */}
            {/* <li>
              <a href="#team" className="page-scroll">
                Team
              </a>
            </li> */}
            
          </ul>
        </div>
      </div>
      
    </nav>
  );
};
