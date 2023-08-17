import React, { useEffect, useState } from 'react';
import "./FeaturedProducts.scss";
import Card from '../Card/Card';
import useFetch from '../../hooks/useFetch';

const FeaturedProducts = ({ type }) => {

    const { data, loading, error } = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`)

    return (
        <div className='featuredProducts'>
            <div className="top">
                <h1>{type} products</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut laudantium, maiores facere blanditiis expedita sint iure itaque laborum delectus aliquid aspernatur repellendus quibusdam quidem alias corporis, fugit totam voluptatum maxime.</p>
            </div>

            <div className="bottom">
                {loading ? "Loading ... " : data?.map(item => (
                    <Card item={item} key={item.id} />
                ))}
            </div>
        </div>
    )
}

export default FeaturedProducts