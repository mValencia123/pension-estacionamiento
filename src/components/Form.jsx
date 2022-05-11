

export const Form = ({children,handleSubmitForm}) => {
    return(
        <form className="flex flex-row my-5 mx-auto p-5" onSubmit={handleSubmitForm}>
            {children}
        </form>
    );
}