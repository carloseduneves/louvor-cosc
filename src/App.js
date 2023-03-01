
import './App.css';
import './components/Data.js'
import songs from './components/Data.js';
import {useState} from "react";
import Song from './components/Song.js';

const Songs = songs;


function App() {
  const [inputValue, setInputValue] = useState('');
  const musicasFiltradas = Songs.filter((name) => name.name.includes(inputValue.toUpperCase()));

  return (
    <div className="App">
     <header>
       <input type="text"
        placeholder="buscar música" onChange={(i) => setInputValue(i.target.value)}
       value={inputValue}
       className="find"
       />
     </header>
     <main>
       {inputValue !== '' &&
       musicasFiltradas.map((music) => <Song key={music.key} name={music.name} letter={music.adress} video={music.playMusic}/>)
       }
     </main>
    </div>
  );
}

export default App;
