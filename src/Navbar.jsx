  import React from 'react'
  export default function Navbar() {
  return (
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Crepello</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">About Restaurant</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Breakfast</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Sandwiches</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Salads</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Pizza</a>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  )
  }
