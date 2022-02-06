import React from 'react'
import '../styles/Meme.scss'
import MemesData from 'data/memesData'

const Meme = () => {  
  const [ meme, setMeme ] = React.useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg'
  })  

  const [ allMemeImages, setAllMemeImages ] = React.useState( MemesData )

  const handleChange = (event: { target: HTMLInputElement }) => {
    const { value, name } = event.target
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
  }
  
  const getMemeImage = () => {
    const memesArray = allMemeImages.data.memes
    const randomImage = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomImage].url
    setMeme(current => {
      return {
        ...current,
        randomImage: url
      }
    })
  }
  

  return (
    <main className='meme'>
      <div className='meme--form'>
        <input 
          type='text' 
          className='meme--input' 
          name='topText'
          value={ meme.topText } 
          placeholder='Top Text' 
          onChange={ handleChange }
        />
        <input 
          type='text' 
          className='meme--input' 
          name='bottomText'
          value={ meme.bottomText } 
          onChange={ handleChange }
          placeholder='Bottom Text' 
        />
        <button 
          className='meme--btn'
          onClick={ getMemeImage }
        >
          Get a new meme image 
          <i className='fas fa-hand-middle-finger' />
        </button>
      </div>
        <div className="meme--image-text">
          <img 
            className='meme--random-image'
            src={ meme.randomImage } 
            alt='' 
          />
          <h2 className="meme--text top">{ meme.topText }</h2>
          <h2 className="meme--text bottom">{ meme.bottomText }</h2>
      </div>
    </main>
  )
}

export default Meme
