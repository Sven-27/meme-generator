import React from 'react'
import '../styles/Meme.scss'
import ModelObject from 'data/memesData'

const Meme = () => {
  const [ getRandomImage, setGetRandomImage ] = React.useState('')
  console.log(ModelObject.data.memes)
  
  const randomImage = () => {
    const memesArray = ModelObject.data.memes
    const randomImage = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomImage].url
    setGetRandomImage(url)
  }

  return (
    <main className='meme'>
      <div className='meme--form'>
        <input 
          type='text' 
          className='meme--input' 
          name='input1' 
          placeholder='Type something...' 
        />
        <input 
          type='text' 
          className='meme--input' 
          name='input2' 
          placeholder='Type something else...' 
        />
        <button 
          className='meme--btn'
          onClick={ randomImage }
        >
          Get a new meme image 
          <i className='fas fa-hand-middle-finger' />
        </button>
      </div>
        {
          getRandomImage &&
           <img 
              className='meme--random-image'
              src={ getRandomImage } 
              alt='' 
            />
        }
    </main>
  )
}

export default Meme
