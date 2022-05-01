import '../assets/styles/styles.css';

export const Boton = (props) => {
    return(
        <input value={props.texto} type="submit" className={props.class} onClick={props.handleClickLogin} />
    );
}
