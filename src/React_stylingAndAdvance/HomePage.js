import React from 'react'
import PropTypes from 'prop-types'
export default function HomePage(p) {

  return (
  <>
  
    
  <nav className={`navbar navbar-${p.mode} navbar-expand-lg bg-${p.mode}`}>
  <div className={`container-fluid`}>
    <a className="navbar-brand" href="/"><strong className='st-logo'>{p.name}</strong></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">{p.AboutText}</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Products</a></li>
            <li><a className="dropdown-item" href="/">Online Shiping</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">New Products</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href='/'>ContactUS</a>
        </li>
        <li  className="">

        </li>
      </ul>
      
</div>
<div className="dropdown-center mx-2">
  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Choose Your Mode
  </button>
  <ul className="dropdown-menu">
    <li className='bg-primary'><a className="dropdown-item" href="#">Blue</a></li>
    <li className="bg-green"><a className="dropdown-item" href="#">Green</a></li>
    <li className="bg-black"><a className="dropdown-item" href="#">Black</a></li>
    <li className='bg-gray'><a className="dropdown-item" href="#">Gray</a></li>
    <li className="bg-pink"><a className="dropdown-item" href="#">Pink</a></li>
    <li className='bg-white'><a className="dropdown-item" href="#">White</a></li>
  </ul>
</div>
      <div className={`form-check form-switch text-${p.mode === 'light'?'black':'light'}`}>
  <input className="form-check-input" type="checkbox" role="switch" onClick={p.toggle} id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{p.mode === 'light'?'Enable Dark Mode':'Enable Light Mode'}</label>
</div>

      
    </div>
  
</nav>



  </>
  )
}
HomePage.propTypes = {name : PropTypes.string.isRequired,AboutText : PropTypes.string}
HomePage.defaultProps = {
  name : "mitz",
  AboutText : "About"
}