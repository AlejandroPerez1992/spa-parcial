import React from 'react';
import Producto from './producto';

const Listadoproductos = ( { productos } ) => (

    <div className="row">
        {productos.map(producto => (
            <Producto 
                producto={ producto }
            
            />
        ))}
    </div>

);
 
export default Listadoproductos;