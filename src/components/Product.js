import React from 'react'
import './product.css'
import { useStateValue } from './StateProvider'

function Product({title, image, price ,rating ,id}) {
    const [{basket},dispatch]=useStateValue();

    const addToBasket =() =>{
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating,
            }
        })
    }
    return (
        <div className='product'>
            <div className="product-info">
                <p className='title'>{title}</p>
                <p className="product-price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product-rating">
                    {Array(rating).fill().map((_, i)=>(<p>🌟</p>))}
                </div>
            </div>
            <img src={image} alt="" />

            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
