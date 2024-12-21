import React from 'react'

import CartItem from './CartItem'
import Image from './Image'

function Cart() {
  return (
    <>
      <div className="cardTop">
        <Image 
          src="https://cdn-icons-png.flaticon.com/512/732/732084.png"
        />
        <div>Total: 10</div>
      </div>

      <div className="cardTitle">
        <span>Your cart</span>
        <span className="card_amount">$89.97</span>
      </div>

      <div className="cardBody">
        <CartItem />
      </div>
    </>
  )
}

export default Cart