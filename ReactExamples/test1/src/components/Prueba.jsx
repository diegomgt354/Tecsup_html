import Proptypes from 'prop-types';

const Prueba=({valor})=> {
  return (
    <div>Valor: {valor}</div>
  )
}

Prueba.propTypes = {
    valor: Proptypes.number.isRequired, //  valor numerico y obligatorio
}


export default Prueba