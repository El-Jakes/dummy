import React from 'react'

const Meme = () => {
  return (
    <main>
        <form className='form' action="">
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
        </form>
    </main>
  )
}

export default Meme