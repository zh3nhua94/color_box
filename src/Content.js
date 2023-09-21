import React, {useState} from 'react'
import Input from './Input';
import Square from './Square';

const Content = () => {

    const [color, setColor] = useState('');
    const [hexValue, setHexValue] = useState('');
    const [isDarkText, setIsDarkText] = useState(true)
    
  return (
    <main>
        <div className="colorBoxWrapper">

            <Square
                color={color}
                hexValue={hexValue}
                isDarkText={isDarkText}
            />
            <Input
                color={color}
                setColor={setColor}
                setHexValue={setHexValue}
                isDarkText={isDarkText}
                setIsDarkText={setIsDarkText}
            />
            
        </div>
    </main>
  )
}

export default Content