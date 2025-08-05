import React, { useState } from 'react'

import "./Input.css"

export const Input = ({onSubmit}) => {
    const [input, setInput] = useState("");

    const handleSubmit = () =>{
        if (!input) return;

        onSubmit(input);

        setInput("");
    };

  return (
    <div className='container'>
        <input type="text" 
        className='input' 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleSubmit} className='button'>
            追加
        </button>
    </div>
  );
};
