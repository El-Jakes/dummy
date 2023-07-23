import React from 'react'
import memesData from '../memData'
// console.log(memesData)
const Meme = () => {

    const handleClick = () => {
    const memeArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memeArray.length)
    const url = memeArray[randomNumber].url
    console.log(url)
  }

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
            <button 
            type="submit" 
            className='form-btn'
            onClick={handleClick}
            >
              Get a new meme image 🖼
            </button>
        </div>
    </main>
  )
}

export default Meme