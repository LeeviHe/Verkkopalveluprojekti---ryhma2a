import React from 'react';
import '../../App.js';
import './Home.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import Carousel from '../../components/Carousel/Carousel';
import { Link } from 'react-router-dom';

// LOGOS

import logo1 from '../../images/logos/Adidas.png';
import logo2 from '../../images/logos/Nike.png';
import logo3 from '../../images/logos/Puma.png';
import logo4 from '../../images/logos/Timberland.png';
import logo5 from '../../images/logos/ugg.png';
import logo6 from '../../images/logos/tomtailor.png';

export default function Home() {

  return (
    <>
      {/* GRID */}

      <div className="container grid-container pt-4">

        {/* SIDEBAR */}
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
                <div className='carousel-img1' />

                <div className="container">
                  <div className="carousel-caption text-start">
                    <h1>Talvikausi on alkanut</h1>
                    <p>Monet laatukengät nyt alennuksessa niin kauan kun tavaraa riittää</p>
                    <button className="btn-xmas" href="#"><span>Tarjouksiin </span></button>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className='carousel-img2' />

                <div className="container">
                  <div className="carousel-caption">
                    <h1>Ilmaiset toimitukset yli 40€ maksaviin tilauksiin!*</h1>
                    <p>*Tarjous koskee vain valittuja tuotteita.</p>
                    <Link to="*">
                      <button className="btn-about" href="#"><span>Lue lisää </span></button>
                    </Link>
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
              <img className="logo" src={logo1} alt="Adidas logo" />
              <img className="logo" src={logo2} alt="Nike logo" />
              <img className="logo" src={logo3} alt="Puma logo" />
              <img className="logo" src={logo4} alt="Timberland logo" />
              <img className="logo" src={logo5} alt="Ugg logo" />
              <img className="logo" src={logo6} alt="TomTailor logo" />
            </div>
          </div>
        </div>

        {/* ADDITIONAL SECTION */}

        <div class="additional pt-4">

          <div class="col additional-col col1">
            <div className='col-banner'>
              <h2 class="fw-normal">Joululahjat</h2>

              <Link to="*">
                <button class="add-btn btn btn-primary">Ostoksille &raquo;</button>
              </Link>

            </div>
          </div>

          <div class="col additional-col col2">
            <div className='col-banner'>
              <h2 class="fw-normal">Uutuudet</h2>

              <Link to="*">
                <button class="add-btn btn btn-primary">Ostoksille &raquo;</button>
              </Link>

            </div>
          </div>

          <div class="col additional-col col3">
            <div className='col-banner'>
              <h2 class="fw-normal">Tarvikkeet</h2>

              <Link to="*">
                <button class="add-btn btn btn-primary">Ostoksille &raquo;</button>
              </Link>

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
                <img alt="placeholder" style={{ width: '100%' }} />
              </div>
            </div>
            <div>
              <div className="m-carousel-img">
                <img alt="placeholder" style={{ width: '100%' }} />
              </div>
            </div>
            <div>
              <div className="m-carousel-img">
                <img style={{ width: '100%' }} />
              </div>
            </div>
            <div>
              <div className="m-carousel-img">
                <img style={{ width: '100%' }} />
              </div>
            </div>
            <div>
              <div className="m-carousel-img">
                <img style={{ width: '100%' }} />
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
                <img alt="placeholder" style={{ width: '100%' }} />
              </div>
            </div>
            <div>
              <div className="m-carousel-img">
                <img alt="placeholder" style={{ width: '100%' }} />
              </div>
            </div>
            <div>
              <div className="m-carousel-img">
                <img style={{ width: '100%' }} />
              </div>
            </div>
            <div>
              <div className="m-carousel-img">
                <img style={{ width: '100%' }} />
              </div>
            </div>
            <div>
              <div className="m-carousel-img">
                <img style={{ width: '100%' }} />
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
                <img alt="placeholder" style={{ width: '100%' }} />
              </div>
            </div>
            <div>
              <div className="m-carousel-img">

                <Link to="*">
                  <img alt="placeholder" style={{ width: '100%' }} />
                </Link>

              </div>
            </div>
            <div>
              <div className="m-carousel-img">

                <Link to="*">
                  <img alt="placeholder" style={{ width: '100%' }} />
                </Link>

              </div>
            </div>
            <div>
              <div className="m-carousel-img">

                <Link to="*">
                  <img alt="placeholder" style={{ width: '100%' }} />
                </Link>

              </div>
            </div>
            <div>
              <div className="m-carousel-img">

                <Link to="*">
                  <img alt="placeholder" style={{ width: '100%' }} />
                </Link>

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
              <input type="email" id="email" name="email"></input>

              <Link to={"/register"}>
                <button className='fixed-btn'>Alennus</button>
              </Link>

            </form>
          </div>
        </div>
      </div>

    </>
  )
}