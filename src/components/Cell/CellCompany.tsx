import {IRowCompany} from "types/interfaces";
import {TABLE_COLUMN_NAMES} from "constants/constants";
import React, {ChangeEvent, useState} from "react";

function CellCompany({cell1, cell2, cell3, el, setCheckbox, changeCompany}: IRowCompany) {

    const [companyName, setCompanyName] = useState(cell1)
    const [address, setAddress] = useState(cell3)

    function handlerChangeCompany(e: ChangeEvent<HTMLInputElement>): void {
        setCompanyName(e.target.value)
    }

    function handlerChangeAddress(e: any): void {
        setAddress(e.target.value)
    }

    function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.code === "Enter" || e.code === "NumpadEnter") {
            changeCompany(companyName, address, el)
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
                <input value={companyName} type="text" onChange={(e) => handlerChangeCompany(e)}
                       onKeyDown={onKeyDown}/>
            </td>
            <td>
                {cell2}
            </td>
            <td>
                <input value={address} type="text" onChange={(e) => handlerChangeAddress(e)}
                       onKeyDown={onKeyDown}/>
            </td>
        </>
    );
}

export default CellCompany;