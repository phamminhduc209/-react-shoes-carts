import React from 'react'

import CartItem from './CartItem'
import Image from './Image'
import { useAppContext } from '../context/AppContext'

function Cart() {
  const { carts } = useAppContext();

  const totalPrice = React.useMemo(() => {
    return carts.reduce((acc, curr) => {
      acc += (curr.quanlity || 1)* curr.price;
      return acc;
    }, 0)
  }, [carts])

  return (
    <>
      <div className="cardTop">
        <Image 
          src="https://cdn-icons-png.flaticon.com/512/732/732084.png"
        />
        <div>Total: {carts.length}</div>
      </div>

      <div className="cardTitle">
        <span>Your cart</span>
        <span className="card_amount">${totalPrice.toFixed(2)}</span>
      </div>

      <div className="cardBody">
        {carts.map(cart => {
          return (
            <CartItem 
              key={cart.id} 
              cart={cart} 
            />
          )
        })}
        
      </div>
    </>
  )
}

export default Cart