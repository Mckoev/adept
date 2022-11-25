import {TABLE_COLUMN_NAMES} from "constants/constants";

function Table({data}: any) {

    const {
        column1,
        column2,
        column3,
        checkbox,
        setSelectAll,
        child,
        removeEl,
        addEl
    } = data

    return (
        <div className='table'>
        <div className="table__buttons">
            <button className='table__button-add' type="button" onClick={addEl}>Добавить</button>
            <button className='table__button-remove' type="button" onClick={removeEl}>Удалить</button>
        </div>
        <table>
            <thead>
            <tr>
                <th colSpan={4}>
                    <label>
                        <input type="checkbox" id="click" onClick={setSelectAll} checked={checkbox} readOnly/>
                        {TABLE_COLUMN_NAMES.SELECT_ALL}
                    </label>
                </th>
            </tr>
            <tr>
                <th>
                    {TABLE_COLUMN_NAMES.CHECKBOX}
                </th>
                <th>
                    {column1}
                </th>
                <th>
                    {column2}
                </th>
                <th>
                    {column3}
                </th>
            </tr>
            </thead>
            <tbody>
            {child}
            </tbody>
        </table>
        </div>
    );
}

export default Table;