import '../styles/Meme.scss'

const Meme = () => {

  return (
    <main className='meme'>
      <form className='meme--form'>
        <input type='text' className='meme--input' name='input1' placeholder='Type something...' />
        <input type='text' className='meme--input' name='input2' placeholder='Type something else...' />
        <button className='meme--btn'>
          Get a new meme image 
          <i className="fas fa-hand-middle-finger" />
        </button>
      </form>
    </main>
  )
}

export default Meme
