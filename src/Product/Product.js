import React from 'react'
import { useStateValue } from '../StateProvider'
import StarIcon from '@material-ui/icons/Star';
function Product({ title, image, id, price, rating }) {

  const [state, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title:title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className=" flex flex-col items-center m-2 p-2 w-[300px] bg-white ">
      <div className="mb-3 h-14">
        <p className='text-center text-lg text-blue-800 font-bold'>{title}</p>
        <p className="mt-1 text-center">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) =>
            (
              <span><StarIcon fontSize='small' className='text-yellow-400 mb-1'/></span>
            )

            )
          }
        </div>
      </div>
      <br></br>

      <img src={image} alt={title} className='h-[200px] w-[250px]'></img>
      <button className='bg-amber-600 p-2 text-black rounded text-sm mt-3 ' onClick={addToBasket} >add to basket</button>
    </div>
  )
}

export default Product