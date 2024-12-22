import React from 'react';

const  AppContext = React.createContext();

export const AppProvider = ({ children }) => {
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
    <AppContext.Provider
      value={{
        carts,
        addToCart,
        deleteCartItem,
        plusQuanlity,
        minusQuanlity
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => React.useContext(AppContext);