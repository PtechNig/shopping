import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from './redux/cartSlice';


function Cart() {
    const items = useSelector(state => state.cart.items);
    const totalQuantity = useSelector(state => state.cart.totalQuantity);
    const totalAmount = useSelector(state => state.cart.totalAmount);
    const dispatch = useDispatch();

    const handleRemove = (id) => {
        dispatch(removeFromCart({ id }));
    };

    return (
        <div className='cart-container'>
            <div className='cart'>
                <h2>Cart Item(s) : {items.length}</h2>
                
                {items.length > 0 ? (
                    items.map(item => (  
                        <div className='cart-item' key={item.id}>
                            <div className='cart-image'>
                                <img src={`https://eatery-web-service.onrender.com/${item.image}`} alt={item.name} />
                            </div>
                            <div className='card-details'>
                                <h3>{item.name} </h3>
                                <p>Price: ${item.price}</p>
                                <p>Quantity: {item.quantity}</p>
                                
                                <button className='btn' onClick={() => handleRemove(item.id)}>Remove</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Your cart is empty</p>
                )}
                <div className='summary'>
                    <p>Total Quantity: {totalQuantity}</p>
                    <p>Total Amount: $ {totalAmount}</p>
                </div>

            </div>
        </div>
    );
}

export default Cart;
