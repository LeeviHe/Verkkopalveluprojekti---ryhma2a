import React from 'react';
import { Link } from "react-router-dom";
import './UConstruction.css';
import img from '../../images/peep-standing-12.svg';

export default function UConstruction() {
  return (
    <>

      <div className='container u-container mb-5 mt-5'>

        <img className='u-img' src={img} alt="black and white drawn cartoon character" />

        <div className='u-content mt-5'>
          <h2>Hups!</h2>
          <h2>Tämä sivu on vielä rakenteilla.</h2>
          <br />

          <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
            <button className='u-btn btn'>Takaisin etusivulle</button>
          </Link>
        </div>


      </div>
    </>
  )
}