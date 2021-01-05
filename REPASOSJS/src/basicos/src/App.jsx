import React, { Fragment, useState } from 'react'
import Carrito from './componentes/Carrito'
import Footer from './componentes/Footer';
import Header from './componentes/Header';
import Producto from './componentes/Producto';

function App() {

  // crear lista de productos
  const [productos, setproductos]=  useState([
    {id:1, nombre: 'camisa polo', precio: 45},
    {id:2, nombre: 'camisa angular', precio: 20},
    {id:3, nombre: 'camisa sin cuello', precio: 35},
    {id:4, nombre: 'jean', precio: 25},
    {id:5, nombre: 'blusa', precio: 50}
  ]);

  // State para carrito de compras
  const [carrito, setCarrito] = useState([]);
  // obtner la fecha
  const fecha = new Date().getFullYear(); 
  return (
    <Fragment>

      <Header
      titulo = 'tienda virtual'
      peso = 'guerra'
      />
      <h1>
       lista de productos 
      </h1>
      {productos.map(producto=>(
        <Producto 
        key={producto.id}
        producto = {producto}
        productos ={productos}
        carrito ={carrito}
        setCarrito = {setCarrito}/>
      )
      )}
     
        <Carrito
        carrito ={carrito}
        setCarrito ={setCarrito}/>
      <Footer fecha = {fecha}/>
        
    </Fragment>
       
    
  );
}

export default App;
