import {IRowWorkers} from "types/interfaces";
import {TABLE_COLUMN_NAMES} from "constants/constants";
import React, {ChangeEvent, useState} from "react";

function CellWorkers({cell1, cell2, cell3, el, setCheckbox, changeWorkers}: IRowWorkers) {

    const [name, setName] = useState(cell1)
    const [surname, setSurname] = useState(cell2)
    const [jobTitle, setJobTitle] = useState(cell3)

    function handlerChangeName(e: ChangeEvent<HTMLInputElement>): void {
        setName(e.target.value)
    }

    function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.code === "Enter" || e.code === "NumpadEnter") {
            changeWorkers(name, surname, jobTitle, el)
        }
    }

    function handlerChangeSurName(e: any): void {
        setSurname(e.target.value)
    }

    function handlerChangeJobTitle(e: any): void {
        setJobTitle(e.target.value)
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
                       onKeyDown={onKeyDown}/>
            </td>
            <td>
                <input value={surname} type="text" onChange={(e) => handlerChangeSurName(e)}
                       onKeyDown={onKeyDown}/>
            </td>
            <td>
                <input value={jobTitle} type="text" onChange={(e) => handlerChangeJobTitle(e)}
                       onKeyDown={onKeyDown}/>
            </td>
        </>
    );
}

export default CellWorkers;