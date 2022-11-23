import {TABLE_COLUMN_NAMES} from "../../constants/constants";
import {ITableprops, IWorkers} from "../../types/interfaces";
import Cell from "../../components/tableCompany/Cell";
import {useTableWorkersLogic} from "../../hooks/useTableWorkersLogic";

function TableWorkers({column1, column2, column3}: ITableprops) {

    const {
        checkbox,
        workers,
        setCheckbox,
        setSelectAll,
    } = useTableWorkersLogic()


    const listItems = workers.map((el: IWorkers) => (
        <tr key={el.id} className={el.checked ? "green" : ""}>
            <Cell el={el} cell1={el.name} cell2={el.surname} cell3={el.jobTitle}
                  setCheckbox={setCheckbox}/>
        </tr>
    ))

    return (
        <table>
            <thead>
            <tr>
                <th colSpan={4}>
                    <label>
                        <input type="checkbox" id="click" onClick={() => setSelectAll()} checked={checkbox} readOnly/>
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
            {listItems}
            </tbody>
        </table>
    );
}

export default TableWorkers;