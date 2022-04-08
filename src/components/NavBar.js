import React from 'react'
import { Link } from "react-router-dom";

const NavBar = () => {

    return (
<nav class="navbar navbar-expand-lg navbar-light bg-white sticky" data-offset="500">
    <div class="container">
      <a href="/" class="navbar-brand">JARVIS<span class="text-primary">news</span></a>

      <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="navbar-collapse collapse" id="navbarContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <Link className="nav-link" to="">Home</Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link" to="/business">Business</Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link" to="/entertainment">Entertainment</Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link" to="/general">General</Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link" to="/health">Health</Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link" to="/science">Science</Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link" to="/sports">Sports</Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link" to="/technology">Technology</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    )

}

export default NavBar
