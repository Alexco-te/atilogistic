import React from 'react'

const Producto = ({producto, carrito, setCarrito, productos}) => {
    const {nombre,precio,id}=producto
    // agregar productos al carrito
    const seleccionarProducto = id => {
        const producto = productos.filter(producto=> producto.id === id );
        setCarrito([
            ...carrito,
            ...producto
        ]);
    }
    // elimnar productos del carrito

    const eliminarProducto =id=>{
        const producto1 = carrito.filter(producto=> producto.id !== id )
        // colocar productos n el state
        setCarrito(producto1)
    }

        
    return (  
        <div>
            <h3>{nombre}</h3>
            <p>{precio}</p>
            {productos
            ?
            (

                <button 
                type = "button"
                onClick={()=> seleccionarProducto(id)}
                >Comprar</button>
            )
            :
            <button 
            type = "button"
            onClick={()=> eliminarProducto(id)}
            >Elimnar</button>
            }
        </div>
    );
}
 
export default Producto;