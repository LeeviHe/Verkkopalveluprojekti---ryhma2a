import './Footer.css';
import React from 'react';
import { Link } from "react-router-dom";


export default function Footer() {
  return (

    <div className="container-fluid">
      <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 footer-container pb-3">

        <div className="col mb-3">
          <h5>Sosiaalinen media</h5>
          <div>
            <a href="https://www.instagram.com/" className="footer-icons">
              <img src="https://png.pngtree.com/png-clipart/20180626/ourmid/pngtree-instagram-icon-instagram-logo-png-image_3584852.png" alt="instagram icon" className='footer-icon'>
              </img>
            </a>

            <a href="https://twitter.com/" className="footer-icons">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="twitter icon" className='footer-icon'></img>
            </a>

            <a href="https://fi-fi.facebook.com/" className="footer-icons">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="facebook icon" className='footer-icon'>
              </img>
            </a>
          </div>


          <h5 className='helper-margin'>Maksutavat</h5>

          <div className='payment'>

            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968397.png" alt="visa icon" className='footer-icon'>
            </img>

            <img src="https://cdn-icons-png.flaticon.com/512/349/349228.png" alt="american express icon" className='footer-icon'></img>

            <img src="https://cdn-icons-png.flaticon.com/512/196/196566.png" alt="paypal icon" className='footer-icon'>
            </img>
          </div>
        </div>

        <div className="col mb-3 footer-col">
          <h5>Toimitustavat</h5>

          <div className='delivery'>

            <img src="https://www.dhlexpress.nl/sites/default/files/styles/grid_image_1x/public/content/images/dhl_logo_met_gele_achtergrond.png?itok=cWJaeDnT" alt="DHL icon" className='footer-icon dhl'>
            </img>

            <img src="https://ekovalaistus.fi/wp-content/uploads/2017/10/postnord-logo.jpg" alt="Postnord icon" className='footer-icon postnord'>
            </img>

            <img src="https://kauppaseinajoki.fi/wp-content/uploads/2017/08/posti-logo.png" alt="Posti icon" className='footer-icon posti'>
            </img>

          </div>




        </div>
        <div className="col mb-3 footer-col">
          <h5>Tietoa</h5>
          <ul className="footer-column">

            <li className="footer-item mb-2">
              <Link to="*" className="footer-link p-0">Yhteystiedot</Link>
            </li>

            <li className="footer-item mb-2">
              <Link to="*" className="footer-link p-0">Kysymyksiä ja vastauksia</Link>
            </li>

            <li className="footer-item mb-2">
              <Link to="*" className="footer-link p-0">Toimitus</Link>
            </li>

            <li className="footer-item mb-2">
              <Link to="*" className="footer-link p-0">Lahjakortit</Link>
            </li>

            <li className="footer-item mb-2">
              <Link to="*" className="footer-link p-0">Uutiskirje</Link>
            </li>

          </ul>
        </div>


        <div className="col mb-3 footer-col">
          <h5>Tietoa Shoelandosta</h5>

          <ul className="footer-column">

            <li className="footer-item mb-2">
              <Link to="*" className="footer-link p-0">Historiamme</Link>
            </li>

            <li className="footer-item mb-2">
              <Link to="*" className="footer-link p-0">Avoimet työpaikat</Link>
            </li>

          </ul>
        </div>

        <div className="col mb-3 footer-col">
          <h5>Lupauksemme</h5>
          <ul className="footer-column">

            <li className="footer-item mb-2">
              <Link to="*" className="footer-link p-0">Ilmainen kuljetus*</Link>
            </li>

            <li className="footer-item mb-2">
              <Link to="*" className="footer-link p-0">Ilmainen palautus</Link>
            </li>

            <li className="footer-item mb-2">
              <Link to="*" className="footer-link p-0">100 päivän palautusoikeus</Link>
            </li>

          </ul>
        </div>
      </footer >
    </div >

  )
}