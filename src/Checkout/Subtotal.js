import React from 'react'
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../reducer';
import { useStateValue } from '../StateProvider';


function Subtotal() {
   const [{basket},dispatch]=useStateValue();


    return (
        <div className='bg-gray-200 p-3 h-34 w-64 border-gray-400 border '>

            <CurrencyFormat
                renderText={(value) => (

                    <>
                        <p className='mb-2'>Subtotal ({basket.length} items): <strong>{value}</strong></p>
                        <small>
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}

            />
            <button className='bg-orange-400 p-0.5 mt-2 w-full text-sm border border-slate-800 shadow  font-small'>Product to Checkout</button>
        </div>
    )
}

export default Subtotal