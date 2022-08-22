import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from '../StateProvider';

function CheckoutProduct({image,title,price,rating,id}) {
    const [{basket},dispatch]=useStateValue();
    const RemoveBasket=()=>{
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id: id,
        })
    }
    return (
        <div className="md:flex   p-8 bg-white mt-2 ml-2 ">
            <img src={image} alt={title} className='w-20 h-20 md:h-full md:w-48 m-auto md:m-0 ' />
            <div className="pt-2 md:p-3 text-center md:text-left ">
                <p className='font-bold'>{title}</p>
                <p >
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div >
                    {Array(rating)
                        .fill()
                        .map((_, i) =>
                        (
                           <span><StarIcon fontSize='small' className='text-yellow-400 mb-1'/></span>
                        ))}
                </div>
                <button onClick={RemoveBasket} className='bg-amber-600 p-1 rounded text-sm '>Remove from basket</button>
            </div>
            <br></br>

            
        </div>
    )
}

export default CheckoutProduct