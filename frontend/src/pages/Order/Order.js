import React, { useState, useEffect, createRef } from 'react'
import Cart from '../../components/Shoppingcart/Shoppingcart';
import '../../components/Shoppingcart/Shoppingcart.css';
import { v4 as uuidv4 } from 'uuid';

export default function Order({ removeFromCart, cart, updateAmount, product }) {
    {/*  const [inputs, _] = useState([]);
    const [inputIndex, setInputIndex] = useState(-1);
    
 
    useEffect(() => {
        for (let i = 0; i < cart.length;i++) {
            inputs[i] = React.createRef();
        }
    }, [cart.length])

    useEffect(() => {
        if (inputs.length > 0 && inputIndex > -1 && inputs[inputIndex].current !== null) {
            inputs[inputIndex].current.focus();
        }
    }, [cart])

   

    function changeAmount(e, product, index) {
        updateAmount(e.target.value, product);
        setInputIndex(index);
    } */}

    let sum = 0;

    return (
        <div>

            <strong>Items in cart</strong>
            <div className="container cart-container">
                {cart.map(product => {
                    sum += parseFloat(product.price);
                    return (
                        <form className="cart-form" key={uuidv4()}>
                            <div className="b c">tuotekuva</div>
                            <div className="a">
                                <div className="b c">{product.productname}</div>
                                {/*<input ref={inputs[index]} style={{ width: '60px'}} value={productnumber.amount} onChange={e => changeAmount(e,productnumber,index)} />*/}
                                <div>{product.price} €</div>

                            </div>
                            <button className="form-btn" type="button" onClick={() => removeFromCart(product)}>tyhjennä ostoskori</button>
                        </form>

                    )
                })}
                <div key={uuidv4()}>
                    <div> </div>
                    <div>{sum.toFixed(2)} €</div>
                </div>
            </div>
        </div>
    )
}
