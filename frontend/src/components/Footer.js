import './Footer.css';
import React from 'react';



export default function Footer() {
  return (

    <div className="container-fluid">
      <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
        <div className="col mb-3">
          <p className="sosmedot">Sosiaalinen media</p>
          <div className="sosmed">
            <button className="nav-item2"><img src="https://png.pngtree.com/png-clipart/20180626/ourmid/pngtree-instagram-icon-instagram-logo-png-image_3584852.png" className="nav-icon search-icon instagram"></img></button>
            <button className="nav-item2"><img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" className="nav-icon search-icon twitter"></img></button>
            <button className="nav-item2"><img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" className="nav-icon search-icon facebook"></img></button>
          </div>
          <a href="/" className="d-flex align-items-center mb-3 link-dark text-decoration-none">
            <svg className="bi me-2"></svg>
          </a>
          <p className="text-muted">© 2022</p>
        </div>

        <div className="col mb-3">
          <h5>Tietoa</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Yhteystiedot</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Kysymyksiä ja vastauksia</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Toimitus</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Lahjakortit</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Uutiskirje</a></li>
          </ul>
        </div>


        <div className="col mb-3">
          <h5>Meistä</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Historiamme</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Avoimet työpaikat</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted"></a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted"></a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted"></a></li>
          </ul>
        </div>

        <div className="col mb-3">
          <h5>Mitä lupaamme</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a className="nav-link p-0 text-muted">Ilmainen kuljetus</a></li>
            <li className="nav-item mb-2"><a className="nav-link p-0 text-muted">Ilmainen palautus</a></li>
            <li className="nav-item mb-2"><a className="nav-link p-0 text-muted">100 päivän palautusoikeus</a></li>
            <li className="nav-item mb-2"><a className="nav-link p-0 text-muted"></a></li>
            <li className="nav-item mb-2"><a className="nav-link p-0 text-muted"></a></li>
          </ul>
        </div>

        <div className="col mb-3">
        </div>
      </footer>
    </div >

  )
}