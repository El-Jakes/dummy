import React from 'react'
import { useState } from 'react'
import memesData from '../memData'

const Meme = () => {
  const [memeImage, setMemeImage] = useState('')

  const handleClick = () => {
    const memesArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomNumber].url
    setMemeImage(url)
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
            <img src={memeImage} alt='meme' className="meme-image" />
    </main>
  )
}

export default Meme 

