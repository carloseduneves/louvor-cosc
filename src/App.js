
import './App.css';
import './components/Data.js'
import songs from './components/Data.js';
import {useState} from "react";
import Song from './components/Song.js';
import Lupa from './assets/lupa.png';

const Songs = songs;
const lupa = Lupa;


function App() {
  const [inputValue, setInputValue] = useState('');
  const musicasFiltradas = Songs.filter((name) => name.name.includes(inputValue.toUpperCase()));

  return (
    <div className="App">
     <header>
      <h1>Ministério de louvor Cosc</h1>
      <form action="">
        <div className="find">
            <img src={lupa} alt="buscar"/>
        
             <input type="text"
              placeholder={'buscar música'}
              onChange={(i) => setInputValue(i.target.value)}
             value={inputValue}
             />
        
        </div>
      </form>
     </header>
     <main>
       {
       musicasFiltradas.map((music) => <Song key={music.key} name={music.name} letter={music.adress} video={music.playMusic}/>)
       }
     </main>
    </div>
  );
}

export default App;
