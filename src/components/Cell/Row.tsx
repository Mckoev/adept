import {ICell} from "types/interfaces";
import {TABLE_COLUMN_NAMES} from "constants/constants";

function Row({cell1, cell2, cell3, el, setCheckbox}: ICell) {

    return (
        <>
            <td>
                <label>
                    <input type="checkbox" id="click" onClick={() => setCheckbox(el.id)} checked={el.checked} readOnly/>
                    {TABLE_COLUMN_NAMES.SELECT}
                </label>
            </td>
            <td>
                {cell1}
            </td>
            <td>
                {cell2}
            </td>
            <td>
                {cell3}
            </td>
        </>
    );
}

export default Row;