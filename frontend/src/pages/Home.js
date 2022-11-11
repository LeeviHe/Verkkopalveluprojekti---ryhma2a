import React from 'react';
import '../App.js';
import './Home.css';
import test1 from '../images/banner1.jpg';
// https://www.pexels.com/photo/trendy-sporty-boots-placed-in-box-4211330/
import test2 from '../images/banner2.jpg';
// https://www.pexels.com/photo/person-standing-on-the-white-snow-7026763/
import logo1 from '../images/Adidas.png';
import logo2 from '../images/Nike.png';
import logo3 from '../images/Puma.png';
import logo4 from '../images/Timberland.png';

/*
let sliderFeat = document.getElementById("slider-featured");
let sliderIn = document.getElementById("slider-indoors");
let sliderOut = document.getElementById("slider-outdoors");

let item1 = sliderFeat.getElementsByClassName("item-featured");
let item2 = sliderIn.getElementsByClassName("item-indoors");
let item3 = sliderOut.getElementsByClassName("item-outdoors");

// red
function next_f() {
  sliderFeat.append(item1[0]); // moves the first item -1 in queue
}

function previous_f() {
  sliderFeat.prepend(item1[item1.length - 1]) // moves the last item +1 in queue
}
 */

export default function Home() {
  return (
    <>

      {/* SIDEBAR */}

      <div className="section-container pt-4">
        <div className="flex-shrink-0 p-3">
          <ul className="list-unstyled ps-0">
            <li class="mb-1">
              <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
                Kesäkengät
              </button>
              <div className="collapse" id="home-collapse">
                <ul className="btn-toggle-nav small">
                  <li><a href="#" className="link-dark d-inline-flex text-decoration-none rounded">Tennarit</a></li>
                  <li><a href="#" className="link-dark d-inline-flex text-decoration-none rounded">Sandaalit</a></li>
                </ul>
              </div>
            </li>

            <li className="mb-1">
              <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 ">
                Talvikengät
              </button>
            </li>

            <li className="mb-1">
              <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
                Juhlakengät
              </button>
              <div className="collapse" id="dashboard-collapse">
                <ul className="btn-toggle-nav small">
                  <li><a href="#" className="link-dark d-inline-flex text-decoration-none rounded">Korkokengät</a></li>
                  <li><a href="#" className="link-dark d-inline-flex text-decoration-none rounded">Puvun kengät</a></li>
                </ul>
              </div>
            </li>
          </ul>
        </div>


        <div className='test-grid'>

          {/* MAIN CAROUSEL */}
          <div className='carousel-grid'>
            <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={test2} className="carousel-img" alt="picture"></img>

                  <div className="container">
                    <div className="carousel-caption text-start">
                      <h1>Talvikausi on alkanut</h1>
                      <p>Monet laatukengät nyt alennuksessa niin kauan kun tavaraa riittää</p>
                      <p><a className="btn btn-lg btn-primary" href="#">Tarjouksiin</a></p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={test1} className="carousel-img" alt="picture"></img>

                  <div className="container">
                    <div className="carousel-caption">
                      <h1>Ilmaiset toimitukset yli 40€ maksaviin tilauksiin!*</h1>
                      <p>Tarjous koskee vain valittuja tuotteita.</p>
                      <p><a className="btn btn-lg btn-primary" href="#">Lue lisää</a></p>
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
        </div>
      </div>

      {/* FEATURED IN */}

      <div className="logo-section">
        <div className="container">
          <div className="logos">
            <img src={logo1} alt="Adidas logo" />
            <img src={logo2} alt="Nike logo" />
            <img src={logo3} alt="Puma logo" />
            <img src={logo4} alt="Timberland logo" />
            <img src={logo1} alt="Adidas logo" />
            <img src={logo2} alt="Nike logo" />
          </div>
        </div>
      </div>

      {/* PRODUCTS CAROUSEL */}

      <section className="product">
        <div className="container-fluid">
          <div>
            <button type="button" className="slider-btn" onclick="previous_f()"><ion-icon name="chevron-back-outline" aria-hidden="true"></ion-icon></button>
            <button type="button" className="slider-btn" onclick="next_f()"><ion-icon name="chevron-forward-outline" aria-hidden="true"></ion-icon></button>
          </div>
          <div className="slider-wrap">
            <div className="slider-main" id="slider-featured">

              <div className="item item-featured">
                <div className="text">
                  <a href="#">
                    <img src={logo2} alt="" />
                  </a>
                </div>
              </div>
              <div className="item item-featured">
                <div className="text">
                  <a href="#">
                    <img src={logo2} alt="" />
                  </a>
                </div>
              </div>
              <div className="item item-featulogo2">
                <div className="text">
                  <a href="#">
                    <img src={logo2} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="product indoors">
        <div className="container-fluid">
          <div>
            <button type="button" className="slider-btn" onClick="previous_i()"><ion-icon name="chevron-back-outline" aria-hidden="true"></ion-icon></button>
            <button type="button" className="slider-btn" onClick="next_i()"><ion-icon name="chevron-forward-outline" aria-hidden="true"></ion-icon></button>
          </div>
          <div className="slider-wrap">
            <div className="slider-main" id="slider-indoors">

              <div className="item item-indoors">
                <div className="text">
                  <a href="#">
                    <img src={logo2} alt="" />
                  </a>
                </div>
              </div>
              <div className="item item-indoors">
                <div className="text">
                  <a href="#">
                    <img src={logo2} alt="" />
                  </a>
                </div>
              </div>
              <div className="item item-indoors">
                <div className="text">
                  <a href="#">
                    <img src={logo2} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="product">
        <div className="container-fluid">
          <div>
            <button type="button" className="slider-btn" onclick="previous_outdoors()"><ion-icon name="chevron-back-outline" aria-hidden="true"></ion-icon></button>
            <button type="button" className="slider-btn" onclick="next_outdoors()"><ion-icon name="chevron-forward-outline" aria-hidden="true"></ion-icon></button>
          </div>
          <div className="slider-wrap">
            <div className="slider-main" id="slider-outdoors">

              <div className="item item-outdoors">
                <div className="text">
                  <a href="#">
                    <img src={logo2} alt="" />
                  </a>
                </div>
              </div>
              <div className="item item-outdoors">
                <div className="text">
                  <a href="#">
                    <img src={logo2} alt="" />
                  </a>
                </div>
              </div>
              <div className="item item-outdoors">
                <div className="text">
                  <a href="#">
                    <img src={logo2} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}