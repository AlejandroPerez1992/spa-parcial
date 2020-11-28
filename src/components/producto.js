import React from 'react';

const Producto = ({ producto }) => {

    const {condition, title, price, currency_id, thumbnail, available_quantity} = producto;
    return ( 
        <div className ="col s15 m6 l4">
            <div className="card">
                <div className="card-image yellow darken-2">
                    <article class="card-item img ">
                        <img src={ thumbnail } alt="Imagen No Disponible"></img>
                        <h5> Producto: { title }</h5>
                        <p> Precio: {price} en {currency_id}</p>
                        <p> Estado: {condition}</p>
                        <p> Stock: {available_quantity}</p>
                    </article>
                </div>
            </div>
        </div>
     );
};
 
export default Producto;
