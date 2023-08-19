import React from 'react';

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import "./Cart.scss";
import { useSelector } from 'react-redux';

const Cart = () => {

    const products = useSelector(state => state.cart.products);

    console.log(products);

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
                            1 x ${item.price}
                        </div>
                    </div>

                    <DeleteOutlineIcon className='delete' />
                </div>
            ))}
            <div className="total">
                <span>SUBTOTAL</span>
                <span>$123</span>
            </div>

            <button>
                PROCEED TO CHECKOUT
            </button>
            <span className="reset">Reset Cart</span>
        </div>
    )
}

export default Cart