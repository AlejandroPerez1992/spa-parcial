import React, { useState, useEffect } from 'react';
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Listadoproductos from './components/Listadoproductos';

function App() {

  const [ categoria, guardarCategoria ] = useState('');
  const [ productos, guardarProductos ] = useState([])

  useEffect( () => {
      const consultarAPI = async() => {
        const url = `https://api.mercadolibre.com/sites/MLA/search?q=ipod&sort=${categoria}&limit=30`

          
        const respuesta = await fetch(url);
        const productos = await respuesta.json();

        guardarProductos(productos.results);
      }
      consultarAPI();
  },[categoria]);


  return (
    <>
      <Header
        titulo = 'Mercado'
      />
      <div className="container ">
        <Formulario 
        guardarCategoria={ guardarCategoria }
        />
        <Listadoproductos
          productos={ productos }
          />
      </div>
    </>
  );
}

export default App;


// OBSERVACION: EL PRIMER ELEMENTO DE LA API NO SE ORDENA, NO SE PORQUE