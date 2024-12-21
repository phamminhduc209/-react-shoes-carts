import React from 'react'

function Image({ src, title, alt }) {
  return (
    <img src={src} alt={alt} title={title} />
  )
}

export default Image