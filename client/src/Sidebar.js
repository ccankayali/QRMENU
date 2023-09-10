import React from 'react'
import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Button } from 'react-bootstrap'

function Sidebar() {
    return (
      <div className="d-flex flex-column flex-shrink-0 bg-light" style={{ width: '4.5rem' }}>
        <a href="/" className="d-block p-3 link-dark text-decoration-none" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Icon-only">
          <svg className="bi" width="40" height="32">
            <use xlinkHref="#bootstrap"></use>
          </svg>
          <span className="visually-hidden">Icon-only</span>
        </a>
        <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
          <li className="nav-item">
            <Button href="#" className="nav-link active py-3 border-bottom" aria-current="page" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Home">
              <svg className="bi" width="24" height="24" role="img" aria-label="Home">
                <use xlinkHref="#home"></use>
              </svg>
            </Button>
          </li>
          <li>
            <Button href="#" className="nav-link py-3 border-bottom" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Dashboard">
              <svg className="bi" width="24" height="24" role="img" aria-label="Dashboard">
                <use xlinkHref="#speedometer2"></use>
              </svg>
            </Button>
          </li>
          <li>
            <Button href="#" className="nav-link py-3 border-bottom" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Orders">
              <svg className="bi" width="24" height="24" role="img" aria-label="Orders">
                <use xlinkHref="#table"></use>
              </svg>
            </Button>
          </li>
          <li>
            <Button href="#" className="nav-link py-3 border-bottom" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Products">
              <svg className="bi" width="24" height="24" role="img" aria-label="Products">
                <use xlinkHref="#grid"></use>
              </svg>
            </Button>
          </li>
          <li>
            <Button href="#" className="nav-link py-3 border-bottom" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Customers">
              <svg className="bi" width="24" height="24" role="img" aria-label="Customers">
                <use xlinkHref="#people-circle"></use>
              </svg>
            </Button>
          </li>
        </ul>
      </div>
    );
  }
  
  export default Sidebar;  
  
  
  
  
  