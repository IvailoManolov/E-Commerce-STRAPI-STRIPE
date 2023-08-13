import React from 'react';
import "./Footer.scss";

const Footer = () => {
    return (
        /* Footer  */
        <div className='footer'>

            { /* Top of Footer  */}
            <div className="top">
                <div className="item">
                    <h1>Categories</h1>
                    <span>Women</span>
                    <span>Men</span>
                    <span>Shoes</span>
                    <span>Accessories</span>
                    <span>New Arrivals</span>
                </div>

                <div className="item">
                    <h1>Links</h1>
                    <span>FAQ</span>
                    <span>Pages</span>
                    <span>Stores</span>
                    <span>Compare</span>
                    <span>Cookies</span>
                </div>

                <div className="item">
                    <h1>About</h1>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur delectus officiis vitae temporibus perferendis harum molestias provident! Totam esse nemo voluptatibus porro labore incidunt ut nulla, repellat aperiam, a accusamus!</span>
                </div>

                <div className="item">
                    <h1>Contact</h1>
                    <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum minus, ullam quis odit id laboriosam aspernatur incidunt vel placeat distinctio aut cumque vero nesciunt illo! Velit tenetur nostrum quas neque.</span>
                </div>

            </div>


            { /* Bottom of Footer  */}
            <div className="bottom">
                <div className="left">
                    <span className='logo'>STORE</span>
                    <span className='copyright'>@ Copyright 2023. All Rights Reserved</span>
                </div>

                <div className="right">
                    <img src="/img/payments.png" alt='' />
                </div>
            </div>

        </div>
    )
}

export default Footer