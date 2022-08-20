import React from 'react';
import imgEcc from '../assets/ecomm.jpg'
import Product from '../Product/Product';
import './Home.css'

function Home() {
  return (
    <div>
        <div className="home">
            <div className="home__container">
                <img className="home__image" src={imgEcc} />
                <div className="home__row">
                    <Product/>
                    <Product/>


                </div>
                <div className="home__row">
                <Product/>
                <Product/>
                <Product/>

                </div>
                <div className="home__row">
                <Product/>

                </div>

            </div>
        </div>
    </div>
  )
}

export default Home