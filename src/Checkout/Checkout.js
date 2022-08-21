import React, { Fragment } from 'react';
import Header from '../Header/Header';
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct';
import imgEcc from '../assets/ecomm.jpg'
import Subtotal from './Subtotal';

export default function Checkout() {
  return (
    <Fragment>
      <Header />
      <div className='flex '>
        <div className="flex flex-col w-1/2">
          <h2 className="font-bold m-3 border-b-2 "> Your Shopping Basket</h2>
          <CheckoutProduct
            id='123'
            title='bag'
            price={11.96}
            rating={5}
            image={imgEcc}

          />

        </div>
        <div className="flex w-1/2 justify-center mt-3">
          <Subtotal />
        </div>

      </div>
    </Fragment>

  )
}
