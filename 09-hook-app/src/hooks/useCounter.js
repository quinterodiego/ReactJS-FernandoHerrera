import {useState} from 'react'

export const useCounter = (initialValue = 10) => {
    
    const [counter, setcounter] = useState(initialValue);

    const increment = () => {
        setcounter(counter + 1);
    }

    const decrement = () => {
        setcounter(counter - 1);
    }

    const reset = () => {
        setcounter(10);
    }
    
    return {
        counter,
        increment,
        decrement,
        reset
    }
}