

export const Form = ({children,handleSubmitForm}) => {
    return(
        <form className="flex flex-row my-3 mx-auto p-3 flex-wrap justify-evenly" onSubmit={handleSubmitForm}>
            {children}
            <input type="submit" className="bg-blue-500 border-none w-3/4 h-9 rounded-lg shadow-lg hover:shadow-2xl text-white cursor-pointer hover:bg-blue-600" value="Enviar información" onClick={handleSubmitForm}/>
        </form>
    );
}