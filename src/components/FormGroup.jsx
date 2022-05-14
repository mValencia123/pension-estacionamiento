import Input from "./Input";

export const FormGroup = ({textLabel,type,handleChangeInput,name}) => {
    return(
        <div className="px-2 py-3" style={{minWidth: "45%"}}>
            <label className="uppercase text-neutral-800 mx-3">{textLabel}</label>
            <Input type={type} placeholder={`${textLabel}...`} handleChangeInput={handleChangeInput} name={name} id={name}/>
        </div>
    );
}