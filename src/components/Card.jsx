

export const Card = ({text}) => {
    return(
        <div className="w-full border-gray-600 border-solid border-2 border-opacity-25 rounded-lg p-5 shadow-md hover:shadow-2xl">
            <p className="text-bold py-1 text-center">{text}</p>
            
        </div>
    );
}