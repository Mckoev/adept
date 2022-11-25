import {IRow} from "types/interfaces";
import {TABLE_COLUMN_NAMES} from "constants/constants";
import {useState} from "react";

function RowCompany({cell1, cell2, cell3, el, setCheckbox}: IRow) {

    const [name, setName] = useState(cell1)
    const [surname, setSurname] = useState(cell2)
    const [jobTitle, setJobTitle] = useState(cell3)

    function handlerChangeName(e: any): void {
        setName(e.target.value)
    }

    function onKeyDownName(e: any) {
        if (e.code === "Enter") {
            // change the state worker name  of an element *el*
        }
    }

    function handlerChangeSurName(e: any): void {
        setSurname(e.target.value)
    }

    function onKeyDownSurname(e: any) {
        if (e.code === "Enter") {
            // change the state worker surname of an element *el*
        }
    }

    function handlerChangeJobTitle(e: any): void {
        setJobTitle(e.target.value)
    }

    function onKeyDownJobTitle(e: any) {
        if (e.code === "Enter") {
            // change the state worker jobTitle of an element *el*
        }
    }


    return (
        <>
            <td>
                <label>
                    <input type="checkbox" id="click" onClick={() => setCheckbox(el.id)} checked={el.checked} readOnly/>
                    {TABLE_COLUMN_NAMES.SELECT}
                </label>
            </td>
            <td>
                <input value={name} type="text" onChange={(e) => handlerChangeName(e)}
                       onKeyDown={onKeyDownName}/>
            </td>
            <td>
                <input value={surname} type="text" onChange={(e) => handlerChangeSurName(e)}
                       onKeyDown={onKeyDownSurname}/>
            </td>
            <td>
                <input value={jobTitle} type="text" onChange={(e) => handlerChangeJobTitle(e)}
                       onKeyDown={onKeyDownJobTitle}/>
            </td>
        </>
    );
}

export default RowCompany;