import React from 'react'

const Square = ({ color, hexValue, isDarkText }) => {
  return (
    <div 
        className="colorBox" 
        style={{
            backgroundColor : color, 
            color: isDarkText ? "black" : "white"
        }}
    >
        <p>{color || 'Empty Value'}</p>
        <p>{hexValue || null}</p>
    </div>
  )
}

export default Square