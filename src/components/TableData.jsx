
export const TableData = ({type,data}) => {
    return(
        type === "H" ? <th className="border-b font-medium p-4 pl-8 pt-0 pb-3 text-slate-500 text-center">{data}</th> : <td className="border-b border-slate-400 p-4 pl-8 text-slate-700 text-center">{data}</td>
    );
}