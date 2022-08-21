import React from 'react';
import StarIcon from '@material-ui/icons/Star';

function CheckoutProduct({image,title,price,rating}) {
    return (
        <div className="md:flex  rounded-xl p-8 ">
            <img src={image} alt={title} className='w-20  md:w-48  md:rounded-none rounded-full ' />
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
                           <span><StarIcon fontSize='small' className='text-yellow-400'/></span>
                        ))}
                </div>
                <button className='bg-amber-600 p-1 rounded text-sm '>Remove from basket</button>
            </div>
            <br></br>

            
        </div>
    )
}

export default CheckoutProduct