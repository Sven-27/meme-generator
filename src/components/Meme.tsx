import '../styles/Meme.scss'
import ModelObject from 'data/memesData'

const Meme = () => {
  console.log(ModelObject.data.memes)
  
  const randomImage = () => {
    const memesArray = ModelObject.data.memes
    const randomImage = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomImage].url
    console.log(url)
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
          <i className="fas fa-hand-middle-finger" />
        </button>
      </div>
    </main>
  )
}

export default Meme
