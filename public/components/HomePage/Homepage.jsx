'use client'

import ProductCard from '@/public/components/ProductCard/ProductCard';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

const HomePage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("products.json")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    const state = useSelector(state => state.cart);
    console.log(state);
    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-3">
                {
                    products.map((product) => (
                        <ProductCard key={product._id} product={product}></ProductCard>
                    ))
                }
            </div>
        </div>
    )
}

export default HomePage