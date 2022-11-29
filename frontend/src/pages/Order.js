import React, { useState, useEffect } from 'react'
import '../components/Shoppingcart.css';
import { v4 as uuidv4 } from 'uuid';

export default function Order({ removeFromCart, cart, updateAmount }) {
    let sum = 0;
    const [inputs] = useState([]);
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
    }
    
    return (
        <div>

            <strong>Items in cart</strong>
            <div className="container cart-container">
                {cart.map((product, index) => {
                    sum+=parseFloat(product.price);
                    return (
                    <form className="cart-form" key={uuidv4()} >
                        <div className="b c">tuotekuva</div>
                        <div className="a">
                             <input ref={inputs[index]} style={{ width: '60px'}} value={product.amount} type="number" name="price" onChange={e => changeAmount(e,product,index)}/>
                            <div className="b c">{product.productname}</div>
                           
                            <div >{sum.toFixed(2)} €</div>
                            
                        </div>
                           <button className="form-btn" type="button" onClick={() => removeFromCart(product)}>tyhjennä ostoskori</button>   
                    </form>

                    )
                })}
                <div key={uuidv4()}> 
                    <div>{sum.toFixed(2)} €</div>
                </div>
            </div>
        </div>
    )
}
