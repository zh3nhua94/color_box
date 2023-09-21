import React from 'react'
import colorNames from 'colornames';

const Input = ({ color, setColor, setHexValue, isDarkText, setIsDarkText }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
        <input 
            className='colorInput'
            type='text'
            required
            placeholder='Add Color Name' 
            value={color}
            onChange={(e) => {
                setColor(e.target.value);
                setHexValue(colorNames(e.target.value));
            }}
        />
        <button 
            type='button'
            onClick={() => setIsDarkText(!isDarkText)}
        >
            Toggle Text Color
        </button>
    </form>
  )
}

export default Input