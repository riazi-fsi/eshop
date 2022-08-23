import React, { useState } from 'react';
import imgEcc from '../assets/ecomm.jpg'
import Header from '../Header/Header';
import Product from '../Product/Product';
import { dataShop } from './data'
import { useEffect } from 'react';

function Home() {

    return (


        <div>
            <Header />

            <div className="items-center m-auto ">
              
                    <img className="w-full h-[400px] mb-[-50px] " src={imgEcc} />
                    <div className="flex m-2 justify-evenly flex-wrap">
                        {dataShop.map((item, i) => (
                            <Product
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                rating={item.rating}
                                image={item.img}
                            />
                        ) )}

                  


                </div>
            </div>
        </div>
    )
}

export default Home