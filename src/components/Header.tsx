import '../styles/Header.scss' 
import trol from 'images/troll-face.png'

const Header = () => {
  return (
  <div className='header'>
    <img src={ trol } alt="icon troll face" />
    <h2>Meme Generator</h2>
    <p>React Course - Project 3</p>
  </div>
  )
}

export default Header;
