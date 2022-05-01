export const Label = ({htmlFor,text}) => {
    return (
        <label className="form-label" htmlFor={htmlFor}>{text}</label>
    );
}