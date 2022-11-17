import React from 'react';
import '../App.js';
import '../pages/Home.css';


export default function Sidebar() {
  return (

    <div className="container grid-container pt-4">
      <div className="sidebar flex-shrink-0 p-3">
        <ul className="list-unstyled ps-0">
          <li class="mb-1">
            <button className="sidebar-select btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
              Kesäkengät
            </button>
            <div className="collapse" id="home-collapse">
              <ul className="btn-toggle-nav small">
                <li className='sidebar-select'><a href="#" className="link-dark d-inline-flex text-decoration-none rounded">Tennarit</a></li>
                <li className='sidebar-select'><a href="#" className="link-dark d-inline-flex text-decoration-none rounded">Sandaalit</a></li>
              </ul>
            </div>
          </li>
          <div className="sidebar flex-shrink-0 p-3">
            <ul className="list-unstyled ps-0">
              <li class="mb-1">
                <button className="sidebar-select btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
                  Kesäkengät
                </button>
                <div className="collapse" id="home-collapse">
                  <ul className="btn-toggle-nav small">
                    <li className='sidebar-select'><a href="products/1" className="link-dark d-inline-flex text-decoration-none rounded">Tennarit</a></li>
                    <li className='sidebar-select'><a href="products/2" className="link-dark d-inline-flex text-decoration-none rounded">Sandaalit</a></li>
                  </ul>
                </div>
              </li>

              <li className="mb-1">
                <button className="sidebar-select btn btn-toggle d-inline-flex align-items-center rounded border-0 ">
                  Talvikengät
                </button>
              </li>

              <li className="mb-1">
                <button className="sidebar-select btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
                  Juhlakengät
                </button>
                <div className="collapse" id="dashboard-collapse">
                  <ul className="btn-toggle-nav small">
                    <li className='sidebar-select'><a href="#" className="link-dark d-inline-flex text-decoration-none rounded">Korkokengät</a></li>
                    <li className='sidebar-select'><a href="#" className="link-dark d-inline-flex text-decoration-none rounded">Puvun kengät</a></li>
                  </ul>
                </div>
              </li>

              <li className="mb-1">
                <button className="sidebar-select btn btn-toggle d-inline-flex align-items-center rounded border-0 ">
                  Juoksuun
                </button>
              </li>

              <li className="mb-1">
                <button className="sidebar-select btn btn-toggle d-inline-flex align-items-center rounded border-0 ">
                  ALE
                </button>
              </li>
            </ul>
          </div>
      </div>
      )
}
