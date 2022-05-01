import '../assets/styles/styles.css';

const CuadroSombreado = ({children}) => {
    return(
        <div className="flex flex-col items-center justify-center h-auto border-solid border-gray-500 border-opacity-25 border-2 bg-white rounded-lg p-3 shadow-xl hover:shadow-2xl">
            {children}
        </div>
    );
}


export default CuadroSombreado;