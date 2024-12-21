import React from 'react'

function Typography({ text, className, onClick }) {
  return (
    <div className={className} onClick={onClick}>{text}</div>
  )
}

export default Typography