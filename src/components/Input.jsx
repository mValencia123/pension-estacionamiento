import '../assets/styles/styles.css';

const Input = (props) => {
    return(
        <input type={props.type} placeholder={props.placeholder} className="w-full mx-3 my-2 text-md border-solid border-2 border-opacity-25 border-gray-600 rounded-lg py-3 px-4" name={props.name} onChange={props.handleChangeInput}/>
    );
}

export default Input;