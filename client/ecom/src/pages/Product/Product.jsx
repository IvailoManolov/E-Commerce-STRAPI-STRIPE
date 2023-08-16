import React, { useState } from 'react';
import "./Product.scss";
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';

const Product = () => {

    const [selectedImg, setSelectedImg] = useState(1);
    const [quantity, setQuantity] = useState(0);

    const images = [
        "https://images.pexels.com/photos/3053824/pexels-photo-3053824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/4906201/pexels-photo-4906201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ];

    return (
        <div className='product'>
            <div className="left">
                <div className="images">
                    <img src={images[0]} alt='' onClick={e => setSelectedImg(0)} />
                    <img src={images[1]} alt='' onClick={e => setSelectedImg(1)} />
                </div>

                <div className="mainImg">
                    <img src={images[selectedImg]} alt="" />
                </div>
            </div>

            <div className="right">
                <h1>Title</h1>
                <span className='price'>$199</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates minus nesciunt impedit eligendi eos libero, incidunt est quo odio dolores veniam minima quos quidem tempore dolor exercitationem molestiae eius dolorem.</p>

                <div className="quantity">
                    <button onClick={() => setQuantity(prev => prev === 1 ? 1 : prev - 1)}>-</button>
                    {quantity}
                    <button onClick={() => setQuantity(prev => prev + 1)}>+</button>
                </div>

                <button className='add'>
                    <ProductionQuantityLimitsIcon /> ADD TO CART
                </button>

                <div className="links">
                    <div className="item">
                        <FavoriteBorderIcon /> ADD TO WISHLIST
                    </div>
                    <div className="item">
                        <BalanceIcon /> ADD TO COMPARE
                    </div>
                </div>

                <div className="info">
                    <span>Vendor : Polo</span>
                    <span>Product Type : TShirt</span>
                    <span>Tag : T-Shirt,Women,Top</span>
                </div>
                <hr />
                <div className="info">
                    <span>DESCRIPTION</span>
                    <hr />
                    <span>ADDITIONAL INFORMATION</span>
                    <hr />
                    <span>FAQ</span>
                </div>
            </div>
        </div>
    )
}

export default Product