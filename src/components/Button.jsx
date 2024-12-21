import React from 'react'

function Button({ buttonText, onClick, type = 'button' }) {
  return (
    <button type={type} onClick={onClick}>{buttonText}</button>
  )
}

export default Button