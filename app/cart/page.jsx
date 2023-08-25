'use client'

import CartPage from '@/public/components/CartPage/CartPage'
import store from '@/public/redux/store'
import React from 'react'
import { Provider } from 'react-redux'

const page = () => {
    return (
        <Provider store={store}>
            <CartPage />
        </Provider>
    )
}

export default page