import '../assets/styles/styles.css';

const Imagen = (props) => {
    return(
        <img alt={props.alt} src={props.src} className="imagen-encabezado"/>
    );
}

export default Imagen;