import React from 'react';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from 'react-router-dom';
import "./Navbar.scss"


const Navbar = () => {
    return (
        <div className='navbar'>

            <div className="wrapper">

                {/* Let Side of Nav Bar */}
                <div className='left'>

                    <div className="item">
                        <img src="/img/flag.png" alt='' />
                        <ArrowDownwardIcon />
                    </div>

                    <div className="item">
                        <span>USD</span>
                        <ArrowDownwardIcon />
                    </div>

                    <div className="item">
                        <Link className='link' to="/products/1">Women</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to="/products/2">Men</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to="/products/3">Children</Link>
                    </div>
                </div>


                {/* Center of Nav Bar */}
                <div className="center">
                    <Link className='link' to="">Store</Link>
                </div>

                <div className="right">
                    <div className="item">
                        <Link className='link' to="">Home</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to="">About</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to="">Contact</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to="">Stores</Link>
                    </div>

                    <div className="icons">
                        <SearchIcon />
                        <PersonIcon />
                        <FavoriteBorderIcon />
                        <div className="cartIcon">
                            <ShoppingCartCheckoutIcon />
                            <span>0</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar