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
    <div className=" flex flex-col items-center m-2 p-3 w-full bg-white justify-end">
      <div className="mb-3 h-14">
        <p>{title}</p>
        <p className="mt-2">
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

      <img src={image} alt={title}></img>
      <button className='bg-amber-600 p-2 text-white rounded text-sm mt-3 ' onClick={addToBasket} >add to basket</button>
    </div>
  )
}

export default Product