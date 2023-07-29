import React from 'react'
import { useState } from 'react'
import memesData from '../memData'


const Meme = () => {
  // const [memeImage, setMemeImage] = useState('http://i.imgflip.com/1bij.jpg')
  const [meme, setMeme] = useState({
  topText: '',
  bottomText: '',
  randomImage: 'http://i.imgflip.com/1bij.jpg'
})
const [allMemeImages, setAllMemeImages] = useState(memesData)


  const handleClick = () => {
    const memesArray = allMemeImages.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomNumber].url
    setMeme(prevMeme => {
      return {
            ...prevMeme,
              randomImage: url
            }
    })
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
            <img src={meme.randomImage} alt='meme' className="meme-image" />
    </main>
  )
}

export default Meme 

