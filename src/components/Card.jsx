

export const Card = ({text,children}) => {
    return(
        <div className="w-full border-gray-600 border-solid border-2 border-opacity-25 rounded-lg p-5 shadow-md hover:shadow-2xl h-60 overflow-y-auto">
            <p className="text-bold py-1 text-center">{text}</p>
            {children}
        </div>
    );
}