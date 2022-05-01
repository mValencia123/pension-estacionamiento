import '../assets/styles/styles.css';

const Contenedor = ({children}) => {
    return(
        <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-100">
            {children}
        </div>
    );
}

export default Contenedor;