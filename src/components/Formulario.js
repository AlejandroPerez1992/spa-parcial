import React from 'react';
import styles from './Formulario.module.css';
import useSelect from '../hooks/useSelect';

const Formulario = ({ guardarCategoria }) => {

    const OPCIONES = [
        {value: 'default', label: 'General'},
        {value: 'price_asc', label: 'Menor Precio'},
        {value: 'price_desc', label: 'Mayor Precio'},
        {value: '&FilterID=ITEM_CONDITION', label: 'Condicion del producto'},
    ]

    const [categoria, SelectProductos] = useSelect('general', OPCIONES);

    const buscarProductos = e => {
        e.preventDefault();
        guardarCategoria(categoria);
    }
    return ( 
        <div className={`${styles.buscador}row`}>
            <div className="col s12 m8 offset-m2">
                <form
                onSubmit={buscarProductos}
                >
                    <h2 className={styles.heading}>Buscar productos por: </h2>
                    
                    <SelectProductos 
                    categoria={categoria}
                    />

                    <div className="input-field col s14">
                        <input
                            type="submit"
                            className={`${styles.btn_block}btn-large yellow darken-2`}
                            value="Buscar"
                            />

                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default Formulario;