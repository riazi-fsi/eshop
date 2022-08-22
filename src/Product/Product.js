import React from 'react'
import { useStateValue } from '../StateProvider'
import './Product.css'

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
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) =>
            (
              <p>*</p>
            )

            )
          }
        </div>
      </div>
      <br></br>

      <img src={image} alt={title}></img>
      <button onClick={addToBasket} >add to basket</button>
    </div>
  )
}

export default Product