import '../assets/styles/styles.css';

export const FormControlInput = ({classForm,htmlFor,textLabel,typeInput,placeholder, handleChangeInput, name}) => {
    return(
        <div className={classForm}>
            <label htmlFor={htmlFor} className="form-label">{textLabel}</label>
            <input type={typeInput} className="input" id={htmlFor} placeholder={placeholder} onChange={handleChangeInput} name={name}/>
        </div>
    );
}