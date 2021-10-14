
import './App.css';
import Pelicula from './components/pelicula';
import PageWraper from './components/PageWraper';
import peliculasJson from './peliculas.json';
import Paginacion from './components/Paginacion';
import { useState } from 'react';


function App() {

  const [paginaActual, setPaginaActual] = useState(1)
  
  const total_por_pagina = 5;

  let pelicula = peliculasJson;

  const cargarPeliculas= () => {
    pelicula = pelicula.slice(
    (paginaActual -1) * total_por_pagina, 
    paginaActual * total_por_pagina);
  }
  

  const getTotalPaginas = () => {
    let cantidadTtotalDePeliculas = peliculasJson.length;
    return Math.ceil(cantidadTtotalDePeliculas / total_por_pagina);
  }

  cargarPeliculas();

  return (
    <PageWraper>
      {pelicula.map(pelicula =>
        <Pelicula titulo={pelicula.titulo} calificacion={pelicula.calificacion}
          director={pelicula.director} reparto={pelicula.reparto}
          fecha={pelicula.fecha} duracion={pelicula.duracion} img={pelicula.img}>
          {pelicula.descripcion}
        </Pelicula>

      )}
      <Paginacion pagina={paginaActual} total={getTotalPaginas()} onChange={(pagina) => {
        setPaginaActual(pagina)
      }} />

    </PageWraper>
  );
}

export default App;
