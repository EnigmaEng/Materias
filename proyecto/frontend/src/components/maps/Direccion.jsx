import { useContext } from 'react';
import Map from './Map';
import todoContext from '../../context/todoContext';

const Direccion = () => {
    const { usuario } = useContext(todoContext);


    const calle = usuario && usuario.rol ? usuario.rol.calle : '';
    const esquina = usuario && usuario.rol ? usuario.rol.esquina : '';
    const nro_puerta = usuario && usuario.rol ? usuario.rol.nro_puerta : '';

    const direccion = `${calle} Y Manuel Alonso,#${nro_puerta} , Montevideo, Uruguay`;

    return (
        <Map direccion={direccion} />
    );
};

export default Direccion;
