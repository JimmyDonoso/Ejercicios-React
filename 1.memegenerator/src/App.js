import html2canvas from 'html2canvas';
import './App.css';
import { useState } from 'react';
 
function App() {
 
 
  const [linea1, setLine1] = useState('');
  const [linea2, setLine2] = useState('');
  const [imagen, setImagen] = useState('');
 
 
  const onChangeLinea1 = function(evento) {
    setLine1(evento.target.value)
  }
 
  const onChangeLinea2 = function(evento) {
    setLine2(evento.target.value)
  }
 
  const onChangeImagen = function(evento) {
    setImagen(evento.target.value)
  }
 
  const onClickExportar = function(evento) {
    html2canvas(document.querySelector("#meme")).then(canvas => {
      var img    = canvas.toDataURL("image/png");
      var link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img;
      link.click();
 
 
  });
  }
 
  return (
   
    <div className="App">
      <header>
        <div className="title">
            <h1>Memegenerator</h1>  
        </div>
      </header>
 
      <div className="caja">
 
        <div className="opciones">
          <select className="selector" onChange={onChangeImagen}>
            <option value="fire">Casa en llamas</option>
            <option value="futurama">Futurama</option>
            <option value="history">History Channel</option>
            <option value="matrix">Matrix</option>
            <option value="philosoraptor">Philosoraptor</option>
            <option value="smart">Smart Guy</option>
          </select><br/>
 
            <input onChange={onChangeLinea1} type="text" placeholder="Texto 1"/><br />
            <input onChange={onChangeLinea2} type="text" placeholder="Texto 2"/><br />
            <button onClick={onClickExportar} className="exportar">Exportar</button>
          </div>
       
          <div className="meme" id="meme">
            <span>{linea1}</span><br />
            <span>{linea2}</span>
            <img src= {"/imgs/" + imagen + ".jpg"} />
          </div>
 
      </div>
 
      <footer>
        <p class= "derechos">Hecho por Jimmy Donoso en React</p>
      </footer>
    </div>
  );
}
 
export default App;