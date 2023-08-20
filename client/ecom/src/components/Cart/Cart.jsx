import React, { useState } from 'react';

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import "./Cart.scss";
import { useDispatch, useSelector } from 'react-redux';

import { removeItem, resetCart } from '../../redux/cartReducer';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { makeRequest } from '../../makeRequest';

const Cart = () => {

    const dispatch = useDispatch();

    const totalPrice = () => {
        let total = 0;
        products.forEach((item) => (total += item.quantity * item.price));
        return total.toFixed(2);
    }

    const products = useSelector(state => state.cart.products);

    const stripePromise = loadStripe('pk_test_51NgtvHBJruDG0mwh1bB6glrFqlsqG1mnaQH8bToaPyi6JidbHlY1rYlQ6tqVdshz1RXOdt7A2ueDM7V3dcOam6PK00uaQJg9V5');

    const handlePayment = async () => {
        try {
            const stripe = await stripePromise;

            const response = await makeRequest.post('/orders', {
                products,
            });

            await stripe.redirectToCheckout({
                sessionId: response.data.stripeSession.id
            });

        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className='cart'>
            <h1>Products in your cart</h1>
            {products?.map(item => (
                <div className='item' key={item.id}>
                    <img src={"http://localhost:5566" + item.img} alt='' />

                    <div className='details'>
                        <h1>{item.title}</h1>
                        <p>{item.title.substring(0, 100)}</p>
                        <div className='price'>
                            {item.quantity} x ${item.price}
                        </div>
                    </div>

                    <DeleteOutlineIcon className='delete' onClick={() => dispatch(removeItem({ id: item.id }))} />
                </div>
            ))}
            <div className="total">
                <span>SUBTOTAL</span>
                <span>${totalPrice()}</span>
            </div>

            <button onClick={handlePayment}>
                PROCEED TO CHECKOUT
            </button>
            <span className="reset" onClick={() => dispatch(resetCart())}>Reset Cart</span>
        </div>
    )
}

export default Cart