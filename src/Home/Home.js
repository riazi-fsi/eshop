import React from 'react';
import imgEcc from '../assets/ecomm.jpg'
import Header from '../Header/Header';
import Product from '../Product/Product';

function Home() {
  return (
   

    <div>
     <Header/>

        <div className="flex items-center m-auto ">
            <div>
                <img className="w-full h-[400px] mb-[-50px] " src={imgEcc} />
                <div className="flex m-2">
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
                <div className="flex m-2">
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
               

                </div>

            </div>
        </div>
    </div>
  )
}

export default Home