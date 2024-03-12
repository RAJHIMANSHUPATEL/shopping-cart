import React, { useContext } from 'react'
import "./Cart.css"
import { ShopContext } from '../../context/shop-context'


function CartItem(props) {
    const { id, productName, price, productImage } = props.data
    const { cartItems, removeFromCart, addToCart, updateCartItemCount } = useContext(ShopContext);
    return (
        <div className='cartItem'>
            <img src={productImage} />
            <div className="description">
                <b><p>{productName}</p></b>
                <p>${price}</p>
                <div className="countHandler">
                    <button onClick={()=> removeFromCart(id)}> - </button>
                    <input type="text" onChange={(e) => updateCartItemCount(Number(e.target.value), id)} value={cartItems[id]} />
                    <button onClick={()=> addToCart(id)}> + </button>
                </div>
            </div>
        </div>
    )
}

export {CartItem}