import './Footer.css';
import React from 'react';



export default function Footer() {
  return (

    <div className="container-fluid">
      <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 footer-container pb-3">

        <div className="col mb-3">
          <h5>Sosiaalinen media</h5>
          <div>
            <a className="footer-icons">
              <img src="https://png.pngtree.com/png-clipart/20180626/ourmid/pngtree-instagram-icon-instagram-logo-png-image_3584852.png" alt="instagram icon" className='footer-icon'>
              </img>
            </a>

            <a className="footer-icons">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="twitter icon" className='footer-icon'></img>
            </a>

            <a className="footer-icons">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="facebook icon" className='footer-icon'>
              </img>
            </a>
          </div>


          <h5 className='helper-margin'>Maksutavat</h5>

          <div className='payment'>
            <a className="footer-icons">
              <img src="https://cdn-icons-png.flaticon.com/512/5968/5968397.png" alt="visa icon" className='footer-icon'>
              </img>
            </a>

            <a className="footer-icons">
              <img src="https://cdn-icons-png.flaticon.com/512/349/349228.png" alt="american express icon" className='footer-icon'></img>
            </a>

            <a className="footer-icons">
              <img src="https://cdn-icons-png.flaticon.com/512/196/196566.png" alt="paypal icon" className='footer-icon'>
              </img>
            </a>
          </div>
        </div>

        <div className="col mb-3 footer-col">
          <h5>Toimitustavat</h5>

          <div className='delivery'>
            <a className="footer-icons">
              posti
            </a>

            <a className="footer-icons">
              postnord
            </a>

            <a className="footer-icons">
              dhl
            </a>
          </div>

          <div>
            <p className="text-muted">© 2022</p>
          </div>
        </div>


        <div className="col mb-3 footer-col">
          <h5>Tietoa</h5>
          <ul className="footer-column">
            <li className="footer-item mb-2"><a href="#" className="footer-link p-0">Yhteystiedot</a></li>
            <li className="footer-item mb-2"><a href="#" className="footer-link p-0">Kysymyksiä ja vastauksia</a></li>
            <li className="footer-item mb-2"><a href="#" className="footer-link p-0">Toimitus</a></li>
            <li className="footer-item mb-2"><a href="#" className="footer-link p-0">Lahjakortit</a></li>
            <li className="footer-item mb-2"><a href="#" className="footer-link p-0">Uutiskirje</a></li>
          </ul>
        </div>


        <div className="col mb-3 footer-col">
          <h5>Tietoa Shoelandosta</h5>
          <ul className="footer-column">
            <li className="footer-item mb-2"><a href="#" className="footer-link p-0">Historiamme</a></li>
            <li className="footer-item mb-2"><a href="#" className="footer-link p-0">Avoimet työpaikat</a></li>
            <li className="footer-item mb-2"><a href="#" className="footer-link p-0"></a></li>
            <li className="footer-item mb-2"><a href="#" className="footer-link p-0"></a></li>
            <li className="footer-item mb-2"><a href="#" className="footer-link p-0"></a></li>
          </ul>
        </div>

        <div className="col mb-3 footer-col">
          <h5>Lupauksemme</h5>
          <ul className="footer-column">
            <li className="footer-item mb-2"><a className="footer-link p-0">Ilmainen kuljetus</a></li>
            <li className="footer-item mb-2"><a className="footer-link p-0">Ilmainen palautus</a></li>
            <li className="footer-item mb-2"><a className="footer-link p-0">100 päivän palautusoikeus</a></li>
            <li className="footer-item mb-2"><a className="footer-link p-0"></a></li>
            <li className="footer-item mb-2"><a className="footer-link p-0"></a></li>
          </ul>
        </div>
      </footer >
    </div >

  )
}