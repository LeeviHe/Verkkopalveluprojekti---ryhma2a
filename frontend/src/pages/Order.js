import React from 'react'
import '../components/Shoppingcart.css';

export default function Order() {
    return (
        <div> 
             
        <strong>Items in cart</strong>
            <div className="container cart-container">

              
                <form className="cart-form">
                    <div className="a">             
                        <div className="b c">tuotekuva</div>
                        <div className="b c">tuotenimi</div>
                    </div>

                    <div className="form-links a">
                        <a className="asd">tyhjennä ostoskori</a>
                    </div>

                    <div className="d">
                        <div>hinta</div>
                        <div>Toimituskulut</div>
                    </div>

                    <div className="d-flex justify-content-center py-3">
                        <button className="form-btn">Tilaa</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
