import React from 'react';
import "./Categories.scss";
import { Link } from 'react-router-dom';

const Categories = () => {
    return (
        <div className='categories'>
            <div className="col">

                <div className='row'>
                    <img src="https://images.pexels.com/photos/45982/pexels-photo-45982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='' />
                    <button>
                        <Link className='link' to="/products/1">Sale</Link>
                    </button>
                </div>

                <div className="row">
                    <img src='https://images.pexels.com/photos/6121448/pexels-photo-6121448.jpeg?auto=compress&cs=tinysrgb&w=1600' alt='' />
                    <button>
                        <Link to="/products/1" className='link'>
                            Women
                        </Link>
                    </button>
                </div>
            </div>

            <div className="col">
                <div className="row">
                    <img src="https://images.pexels.com/photos/2405062/pexels-photo-2405062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='' />
                    <button>
                        <Link className='link' to="/products/1">
                            Winter Season
                        </Link>
                    </button>
                </div>
            </div>

            <div className="col col-l">

                <div className="row">
                    <div className="col">
                        <div className="row">
                            <img src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1600" alt='' />
                            <button>
                                <Link className='link' to="/products/1">
                                    Men
                                </Link>
                            </button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <img src="https://images.pexels.com/photos/364822/rolex-watch-time-luxury-364822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='' />
                            <button>
                                <Link className='link' to="/products/1">
                                    Accessories
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <img src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='' />
                    <button>
                        <Link className='link' to="/products/1">
                            Men
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Categories