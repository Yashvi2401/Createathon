import React from 'react'

function Card({ children, className }) {
  return (
    <div className={`p-4 bg-white rounded-lg  h-full shadow-md hover:shadow-lg transition duration-300 ${className}`}>
      {children}
    </div>
  )
}

export default Card
