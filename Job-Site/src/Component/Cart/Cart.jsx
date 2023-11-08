import React from 'react';
// import './Cart.css';

const Cart = ({ cart }) => {
    // const cart = props.cart; // option 1
    // const {cart} = props; // option 2

    // console.log(cart);

    let name = '';
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart) {
        // if(product.quantity === 0){
        //     product.quantity = 1;
        // }
        // product.quantity = product.quantity || 1;

        // totalPrice = totalPrice + product.price * product.quantity;
        // totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
        name=product.title
    }
    // const tax = totalPrice * 7 / 100;pr

    // const grandTotal = totalPrice + totalShipping + tax;

    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: {quantity}</p>
            <p>Total Name: {name}</p>
            <p>Shipping: ${totalShipping}</p>
            <p>Tax: $   </p>
            <h6>Grand Total: $  </h6>
        </div>
    );
};

export default Cart;