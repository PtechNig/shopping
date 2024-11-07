import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addToCart } from './redux/cartSlice'


const Details = () => {
  const [data, setData] = useState([])
  const dispatch = useDispatch()
  const {id} = useParams()

  useEffect(() => {
    axios.get(`http://127.0.0.1:5000/api/v1/shopping/product/${id}`)
    .then(res => {
      setData(res.data.product)
      console.log(res.data.product)
    })
    .catch(err => console.log(err))
  }, [id])
  

  const handleAddToCart = () => {
    // Dispatch addToCart action with selected product details
    dispatch(addToCart({
      name: data.id,
      name: data.name,
      brand: data.brand,
      price: data.price,
      image: data.image
    }))
  }


  return (
    <div className='detailContainer'>
      <div>
        <img src={`http://127.0.0.1:5000/${data.image}`} alt={data.name} />
      </div>
      <div>
        <h2>{data.name}</h2>
        <p><strong>Description:</strong> {data.description}</p>
        <p><strong>Brand:</strong> {data.brand}</p>
        <p><strong>Category:</strong> {data.category}</p>
        <p><strong>Price:</strong> ${data.price}</p>
        </div>
        <div className="reviews">


        <div className="features">
          <strong>Features:</strong>

          <ul>
            {data.features && data.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <button onClick={handleAddToCart} >Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Details
