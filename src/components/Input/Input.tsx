import React, { useState, ChangeEvent } from 'react'
import "./Input.css"

interface InputProps {
  onSubmit: (input: string) => void;
}


export const Input: React.FC<InputProps> = ({onSubmit}) => {
    const [input, setInput] = useState<string>("");

    const handleSubmit = () =>{
        if (!input) return;

        onSubmit(input);

        setInput("");
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

  return (
    <div className='container'>
        <input type="text" 
        className='input' 
        value={input}
        onChange={handleChange}
        />
        <button onClick={handleSubmit} className='button'>
            追加
        </button>
    </div>
  );
};
