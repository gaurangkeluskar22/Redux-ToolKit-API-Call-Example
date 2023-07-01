import React from "react";
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Redux Toolkit
      </a>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active mx-2">
                  <Link to="/">Home</Link>
                </li>
                <li className="nav-item mx-2">
                  <Link to="/read">All Users</Link>
                </li>
              </ul>
            </div>
            <div className="col-sm-6">
              <form className="form-inline my-2 w-40">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
