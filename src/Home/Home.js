import React from 'react';
import imgEcc from '../assets/ecomm.jpg'
import Header from '../Header/Header';
import Product from '../Product/Product';
import './Home.css'

function Home() {
  return (
   

    <div>
     <Header/>

        <div className="home">
            <div className="home__container">
                <img className="home__image" src={imgEcc} />
                <div className="home__row">
                    <Product
                    id='123'
                     title='bag'
                    price={11.96}
                    rating={5}
                    image={imgEcc}
                     />
                    <Product  id='45'
                     title='bag'
                    price={13.96}
                    rating={2}
                    image={imgEcc}/>


                </div>
                <div className="home__row">
                <Product  id='4'
                     title='bag2'
                    price={11.96}
                    rating={5}
                    image={imgEcc}/>
                <Product  id='5'
                     title='bag3'
                    price={12.96}
                    rating={5}
                    image={imgEcc}/>
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