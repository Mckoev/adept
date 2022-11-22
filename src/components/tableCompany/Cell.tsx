import {ICell} from "../../types/interfaces";

function Cell({el, setCheckbox}: ICell) {

    return (
        <>
            <td>
                <label>
                    <input type="checkbox" id="click" onClick={() => setCheckbox(el.id)} checked={el.checked} readOnly/>
                    Выделить
                </label>
            </td>
            <td>
                {el.company}
            </td>
            <td>
                {el.workers.length}
            </td>
            <td>
                {el.address}
            </td>
        </>
    );
}

export default Cell;