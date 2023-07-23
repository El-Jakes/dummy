import React from 'react'

const Meme = () => {
  return (
    <main>
        <div className='form'>
            <input 
                type="text" 
                className='form-input'
                placeholder='type setup'
            />
            <input 
                type="text" 
                className='form-input'
                placeholder='type punchline'
            />
            <button type="submit" className='form-btn'>Get a new meme image 🖼</button>
        </div>
    </main>
  )
}

export default Meme