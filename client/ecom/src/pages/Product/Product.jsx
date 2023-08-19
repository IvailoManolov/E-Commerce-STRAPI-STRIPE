import React, { useState } from 'react';
import "./Product.scss";
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';

const Product = () => {

    const id = useParams().id;
    const [selectedImg, setSelectedImg] = useState("img");
    const [quantity, setQuantity] = useState(0);

    const { data, loading, error } = useFetch(
        `/products/${id}?populate=*`
    )


    return (
        <div className='product'>
            {loading ? "Loading" : <>
                <div className="left">
                    <div className="images">
                        <img src={"http://localhost:5566" + data?.attributes?.img.data.attributes.url} alt='' onClick={e => setSelectedImg("img")} />
                        <img src={"http://localhost:5566" + data?.attributes?.img2?.data?.attributes?.url} alt='' onClick={e => setSelectedImg("img2")} />
                    </div>

                    <div className="mainImg">
                        <img src={"http://localhost:5566" + data?.attributes?.[selectedImg]?.data?.attributes?.url} alt="" />
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
            </>}
        </div>
    )
}

export default Product