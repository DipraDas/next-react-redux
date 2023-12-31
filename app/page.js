
'use client'
import HomePage from '@/public/components/HomePage/Homepage'
import store from '@/public/redux/store'
import React from 'react'
import { Provider } from 'react-redux'

const page = () => {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  )
}

export default page