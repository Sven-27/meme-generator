import '../styles/Header.scss' 
import { image } from 'data/data'

const Header = () => {
  const { troll } = image

  return (
  <div className='header'>
    <img src={ troll } alt='icon troll face' />
    <h2>Meme Generator</h2>
    <p>React Course - Project 3</p>
  </div>
  )
}

export default Header
