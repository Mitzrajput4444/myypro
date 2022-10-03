import React from "react";
export default function Header(){
    return(
        <>
   <header id="site-header" className="fixed-top">
  <div className="container">
    <nav className="navbar navbar-expand-lg stroke p-0">
      <h1> <a className="navbar-brand" href="index.html">
          <span className="fa fa-bell-o" /> Blog Store
        </a></h1>
      <button className="navbar-toggler  collapsed bg-gradient" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon fa icon-expand fa-bars" />
        <span className="navbar-toggler-icon fa icon-close fa-times" />
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav ml-lg-5 mr-lg-auto">
          <li className="nav-item active">
            <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item @@about__active">
            <a className="nav-link" href="about.html">About</a>
          </li>
          <li className="nav-item @@contact__active">
            <a className="nav-link" href="contact.html">Contact</a>
          </li>
        </ul>
        <div className="navbar-nav search-right nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#Pages" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span className="fa fa-search" />
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <div className="search_form">
              <form action="search-results.html" method="GET">
                <input type="text" placeholder="Search" />
                <button type="submit" className="btn" value><span className="fa fa-search" aria-hidden="true" /></button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-position">
        <nav className="navigation">
          <div className="theme-switch-wrapper">
            <label className="theme-switch" htmlFor="checkbox">
              <input type="checkbox" id="checkbox" />
              <div className="mode-container">
                <i className="gg-sun" />
                <i className="gg-moon" />
              </div>
            </label>
          </div>
        </nav>
      </div>
    </nav>
  </div>
</header>

        
        </>
    )
}