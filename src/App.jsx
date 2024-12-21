import React from 'react';
import Image from "./components/Image";
import Product from "./components/Product";
import Cart from "./components/Cart";

export default function App() {
  const [carts, setCarts] = React.useState([]);

  function addToCart(item) {
    const newItem = {
      ...item,
      quanlity: 1
    }
    setCarts(prevState => {
      return [...prevState, newItem]
    })
  }

  function deleteCartItem(cartId) {
    // const newCarts = carts.filter(cart => cart.id !== cartId);
    // setCarts(newCarts)
    setCarts(prevState => prevState.filter(cart => cart.id !== cartId))
  }

  function plusQuanlity(cartId) {
    const newCarts = JSON.parse(JSON.stringify(carts)); // deep clone
    const index = newCarts.findIndex(cart => cart.id === cartId);
    newCarts[index].quanlity = newCarts[index].quanlity + 1;
    setCarts(newCarts)
  }

  function minusQuanlity(cartId) {
    const newCarts = JSON.parse(JSON.stringify(carts)); // deep clone
    const index = newCarts.findIndex(cart => cart.id === cartId);
    if(newCarts[index].quanlity === 1) {
      newCarts.splice(index, 1)
    } else {
      newCarts[index].quanlity = newCarts[index].quanlity - 1;
    }
    setCarts(newCarts)
  }

  return (
    <div className="mainContent">
      <div className="card">
        <div className="cardTop">
          <Image 
            src="https://cdn-icons-png.flaticon.com/512/732/732084.png"
          />
        </div>

        <Product addToCart={addToCart} carts={carts} />

      </div>

      {/* cart */}
      <div className="card">
        <Cart 
          carts={carts} 
          deleteCartItem={deleteCartItem} 
          plusQuanlity={plusQuanlity}
          minusQuanlity={minusQuanlity}
        />
      </div>
    </div>
  );
}
