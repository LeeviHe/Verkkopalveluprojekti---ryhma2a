import React from 'react';
import '../App.js';
import './Home.css';
import banner1 from '../images/banner/banner-img1.jpg';
// https://www.pexels.com/photo/trendy-sporty-boots-placed-in-box-4211330/
import banner2 from '../images/banner/banner-img2.jpg';
// https://www.pexels.com/photo/person-standing-on-the-white-snow-7026763/
import logo1 from '../images/logos/Adidas.png';
import logo2 from '../images/logos/Nike.png';
import logo3 from '../images/logos/Puma.png';
import logo4 from '../images/logos/Timberlandlogouus.png';
import logo5 from "../images/logos/ugg.png"
import logo6 from "../images/logos/tomtailor.png"
import kenka1 from '../images/products/adidas1.png';
import kenka2 from '../images/products/adidas2.png';
import kenka3 from '../images/products/adidas3.png';
import { useState } from 'react';
import Sidebar from '../components/Sidebar.js';
import Carousel from '../components/Carousel/Carousel';

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
      {/* GRID */}

      <div className="container grid-container pt-4">
        <>
          <Sidebar />
        </>
        {/* MAIN CAROUSEL */}

        <div className='carousel-grid col-12'>
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
                    <p>*Tarjous koskee vain valittuja tuotteita.</p>
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
              <img className="Adidas" src={logo1} alt="Adidaslogo" />
              <img className="Nike" src={logo2} alt="Nikelogo" />
              <img className="Puma" src={logo3} alt="Pumalogo" />
              <img className="Timberland" src={logo4} alt="Timberlandlogo" />
              <img className="Ugg" src={logo5} alt="Ugg" />
              <img className="TomTailor" src={logo6} alt="TomTailor" />
            </div>
          </div>
        </div>

        {/* ADDITIONAL SECTION */}

        <div class="additional pt-4">

          <div class="col additional-col col1">
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

          <div class="col additional-col col2">
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

          <div class="col additional-col col3">
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

        <div className='products-carousel'>

          <h1 className="products-header">ALE</h1>
          <Carousel
            show={3}
            infiniteLoop
          >
            <div>
              <div className="m-carousel-img">
                <img src={kenka1} alt="placeholder" style={{ width: '100%' }} />
              </div>
            </div>
            <div>
              <div className="m-carousel-img">
                <img src={kenka2} alt="placeholder" style={{ width: '100%' }} />
              </div>
            </div>
            <div>
              <div className="m-carousel-img">
                <img src={kenka3} style={{ width: '100%' }} />
              </div>
            </div>
            <div>
              <div className="m-carousel-img">
                <img src="https://images.unsplash.com/photo-1668405409882-0b3a8b6fc912?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="placeholder" style={{ width: '100%' }} />
              </div>
            </div>
            <div>
              <div className="m-carousel-img">
                <img src="https://images.unsplash.com/photo-1668405409882-0b3a8b6fc912?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="placeholder" style={{ width: '100%' }} />
              </div>
            </div>
          </Carousel>

          <h1 className="products-header">Uutuudet</h1>

          <Carousel
            show={3}
            infiniteLoop
          >
            <div>
              <div className="m-carousel-img">
                <img src="https://images.unsplash.com/photo-1668405409882-0b3a8b6fc912?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="placeholder" style={{ width: '100%' }} />
              </div>
            </div>
            <div>
              <div className="m-carousel-img">
                <img src="https://images.unsplash.com/photo-1668405409882-0b3a8b6fc912?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="placeholder" style={{ width: '100%' }} />
              </div>
            </div>
            <div>
              <div className="m-carousel-img">
                <img src="https://images.unsplash.com/photo-1668405409882-0b3a8b6fc912?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="placeholder" style={{ width: '100%' }} />
              </div>
            </div>
            <div>
              <div className="m-carousel-img">
                <img src="https://images.unsplash.com/photo-1668405409882-0b3a8b6fc912?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="placeholder" style={{ width: '100%' }} />
              </div>
            </div>
            <div>
              <div className="m-carousel-img">
                <img src="https://images.unsplash.com/photo-1668405409882-0b3a8b6fc912?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="placeholder" style={{ width: '100%' }} />
              </div>
            </div>
          </Carousel>

          <h1 className="products-header">Suosituimmat</h1>

          <Carousel
            show={3}
            infiniteLoop
          >
            <div>
              <div className="m-carousel-img">
                <img src="https://images.unsplash.com/photo-1668405409882-0b3a8b6fc912?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="placeholder" style={{ width: '100%' }} />
              </div>
            </div>
            <div>
              <div className="m-carousel-img">
                <img src="https://images.unsplash.com/photo-1668405409882-0b3a8b6fc912?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="placeholder" style={{ width: '100%' }} />
              </div>
            </div>
            <div>
              <div className="m-carousel-img">
                <img src="https://images.unsplash.com/photo-1668405409882-0b3a8b6fc912?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="placeholder" style={{ width: '100%' }} />
              </div>
            </div>
            <div>
              <div className="m-carousel-img">
                <img src="https://images.unsplash.com/photo-1668405409882-0b3a8b6fc912?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="placeholder" style={{ width: '100%' }} />
              </div>
            </div>
            <div>
              <div className="m-carousel-img">
                <img src="https://images.unsplash.com/photo-1668405409882-0b3a8b6fc912?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="placeholder" style={{ width: '100%' }} />
              </div>
            </div>
          </Carousel>

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

/*
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

            <h1 className="product-header py-2">Suosituimmat</h1>
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
          </div>
        </div>
*/