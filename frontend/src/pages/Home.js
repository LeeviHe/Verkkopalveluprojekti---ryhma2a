import React from 'react';
import '../App.js';
import './Home.css';
import banner1 from '../images/banner-img1.jpg';
// https://www.pexels.com/photo/trendy-sporty-boots-placed-in-box-4211330/
import banner2 from '../images/banner-img2.jpg';
// https://www.pexels.com/photo/person-standing-on-the-white-snow-7026763/
import logo1 from '../images/Adidaslogo.png';
import logo2 from '../images/Nikelogo.png';
import logo3 from '../images/Pumalogo.png';
import logo4 from '../images/Timberlandlogo.png';
import kenka1 from '../images/adidas3.png'
import kenka2 from '../images/adidas2.png'
import kenka3 from '../images/nike2.png'
import kenka4 from '../images/nike.png'
import kenka5 from '../images/nike3.png'
import kenka6 from '../images/adidas1.png'
import kenka7 from '../images/puma.png'
import kenka8 from '../images/puma2.png'
import kenka9 from '../images/puma3.png'

import { useState } from 'react';

export default function Home() {

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <>


      {/* SIDEBAR */}

      <div className="grid-container pt-4">
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


        {/* MAIN CAROUSEL */}

        <div className='carousel-grid'>
          <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={banner2} className="carousel-img" alt="picture"></img>

                <div className="container">
                  <div className="carousel-caption text-start">
                    <h1>Talvikausi on alkanut</h1>
                    <p>Monet laatukengät nyt alennuksessa niin kauan kun tavaraa riittää</p>
                    <button className="btn-xmas" href="#"><span>Tarjouksiin </span></button>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img src={banner1} className="carousel-img" alt="picture"></img>

                <div className="container">
                  <div className="carousel-caption">
                    <h1>Ilmaiset toimitukset yli 40€ maksaviin tilauksiin!*</h1>
                    <p>Tarjous koskee vain valittuja tuotteita.</p>
                    <button className="btn-about" href="#"><span>Lue lisää </span></button>
                  </div>
                </div>
              </div>
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>


        {/* LOGOS SECTION */}

        <div className="logo-section pt-4">
          <div className="container">
            <div className="logos">
              <img src={logo1} alt="Adidaslogo" />
              <img src={logo2} alt="Nikelogo" />
              <img src={logo3} alt="Pumalogo" />
              <img src={logo4} alt="Timberlandlogo" />
              <img src={logo1} alt="Adidaslogo" />
              <img src={logo2} alt="Nikelogo" />
            </div>
          </div>
        </div>

        {/* RANDOM */}

        <div class="random pt-4">

          <div class="col random-col col1">
            <div className='col-banner'>
              <h2 class="fw-normal">Joululahjat</h2>
              <a class="btn btn-secondary" style={{
                background: isHovering ? "rgba(75, 75, 75, 0.556)" : '',
                border: isHovering ? "2px solid rgba(158, 158, 158, 0.516)" : '',
                color: isHovering ? 'white' : '',
              }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave} defaultValue="false" href="#">Ostoksille &raquo;</a>
            </div>
          </div>

          <div class="col random-col col2">
            <div className='col-banner'>
              <h2 class="fw-normal">Uutuudet</h2>
              <a class="btn btn-secondary" style={{
                background: isHovering ? "rgba(75, 75, 75, 0.556)" : '',
                border: isHovering ? "2px solid rgba(158, 158, 158, 0.516)" : '',
                color: isHovering ? 'white' : '',
              }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave} href="#">Ostoksille &raquo;</a>
            </div>
          </div>

          <div class="col random-col col3">
            <div className='col-banner'>
              <h2 class="fw-normal">Tarvikkeet</h2>
              <a class="btn btn-secondary" style={{
                background: isHovering ? "rgba(75, 75, 75, 0.556)" : '',
                border: isHovering ? "2px solid rgba(158, 158, 158, 0.516)" : '',
                color: isHovering ? 'white' : '',
              }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                href="#">Ostoksille &raquo;</a>
            </div>
          </div>
        </div>

        {/* PRODUCTS */}

        <div className="album py-5 bg-light">

          <div className="product-row row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

            <h1 className="product-header py-2">ALE</h1>
            <div className="col">
              <div className="card shadow-sm">
                <img src={kenka1} className="product-img"></img>
                <div className="card-body">
                  <p className="card-text">Product info.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Cart</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card shadow-sm">
                <img src={kenka2} className="product-img"></img>
                <div className="card-body">
                  <p className="card-text">Product info.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Cart</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card shadow-sm">
                <img src={kenka3} className="product-img"></img>
                <div className="card-body">
                  <p className="card-text">Product info.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Cart</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h1 className="product-header py-2">Uutuudet</h1>
            <div className="col">
              <div className="card shadow-sm">
                <img src={kenka4} className="product-img"></img>

                <div className="card-body">
                  <p className="card-text">Product info.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Cart</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <img src={kenka5} className="product-img"></img>

                <div className="card-body">
                  <p className="card-text">Product info.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Cart</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <img src={kenka6} className="product-img"></img>

                <div className="card-body">
                  <p className="card-text">Product info.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Cart</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h1 className="product-header py-2">Suosituimmat</h1>
            <div className="col">
              <div className="card shadow-sm">
                <img src={kenka7} className="product-img"></img>

                <div className="card-body">
                  <p className="card-text">Product info.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Cart</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <img src={kenka8} className="product-img"></img>

                <div className="card-body">
                  <p className="card-text">Product info.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Cart</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <img src={kenka9} className="product-img"></img>

                <div className="card-body">
                  <p className="card-text">Product info.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Cart</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>


      {/* FIXED SECTION */}

      <div className='fixed-section'>
        <div className='fixed-banner'>
          <div className='fixed-text'>
            <h2 class="fw-normal">10% Alennus ensimmäisestä ostoksestasi.</h2>
            <p>Liity uutiskirjeen tilaajaksi ja nauti tervetuliaislahjasta</p>

            <form>
              <label for="email" placeholder='Sähköpostiosoite'></label>
              <input type="email" id="email" name="email"></input>
              <button className='fixed-btn'>Alennus</button>
            </form>
          </div>
        </div>
      </div>

    </>
  )
}