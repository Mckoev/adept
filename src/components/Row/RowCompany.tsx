import {IRow} from "types/interfaces";
import {TABLE_COLUMN_NAMES} from "constants/constants";
import {useState} from "react";

function RowCompany({cell1, cell2, cell3, el, setCheckbox}: IRow) {

    const [companyName, setCompanyName] = useState(cell1)
    const [address, setAddress] = useState(cell3)

    function handlerChangeCompany(e: any): void {
        setCompanyName(e.target.value)
    }

    function onKeyDownCompany(e: any) {
        if (e.code === "Enter") {
            // change the state company name  of an element *el*
        }
    }

    function handlerChangeAddress(e: any): void {
        setAddress(e.target.value)
    }

    function onKeyDownAddress(e: any) {
        if (e.code === "Enter") {
            // change the state address of an element *el*
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
                       onKeyDown={onKeyDownCompany}/>
            </td>
            <td>
                {cell2}
            </td>
            <td>
                <input value={address} type="text" onChange={(e) => handlerChangeAddress(e)}
                       onKeyDown={onKeyDownAddress}/>
            </td>
        </>
    );
}

export default RowCompany;