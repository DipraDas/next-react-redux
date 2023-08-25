import ProductCard from '@/public/components/ProductCard/ProductCard'
import store from '@/public/redux/store';
import React from 'react'
import { Provider, useSelector } from 'react-redux';


const CartPage = () => {
    const cart = useSelector((state) => state.cart);
    return (
        <Provider store={store}>
            {cart
                .sort((a, b) => a._id - b._id)
                .map((product) => (
                    <ProductCard product={product}></ProductCard>
                ))}
        </Provider>
    )
}

export default CartPage