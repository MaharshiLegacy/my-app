import React from "react";
function Navbar(props) {
    const Myfun=()=>{
        if (props.mode==="Light Mode"){
            props.changeMode("Dark Mode")
            document.body.style.backgroundColor="#4d5959";
            document.title="Text Utility- Dark Mode"
        }
        if (props.mode==="Dark Mode"){
            props.changeMode("Light Mode");
            document.body.style.backgroundColor="white";
            document.title="Text Utility- Light Mode"
        }
    }
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary"  data-bs-theme={props.mode==="Dark Mode"? "dark":"light"}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.heading}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <button className="btn btn-outline-success" type="button" onClick={Myfun}>
              {props.mode==="Light Mode"?"Dark Mode":"Light Mode"}
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
