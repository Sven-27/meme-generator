import  './App.scss'
import Header from 'components/Header'
import Meme from 'components/Meme'

function App() {
  return (
    <div className='app'>
      <div className='app--container'>
           <Header />
           <Meme />
      </div> 
    </div>
  );
}

export default App;
