import Cell from "../../components/tableCompany/Cell";
import {ICompany, ITableprops} from "../../types/interfaces";
import {TABLE_COLUMN_NAMES} from "../../constants/constants";
import {UseTableCompanyLogic} from "../../hooks/useTableCompanyLogic";

function TableCompany({column1, column2, column3}: ITableprops) {

    const {companies,
        mainCheckBox,
        setCheckbox,
        setSelectAll} = UseTableCompanyLogic()

    const listItems = companies.map((el: ICompany) => (
        <tr key={el.id} className={el.checked ? "green" : ""}>
            <Cell el={el} cell1={el.company} cell2={el.workers.length.toString()} cell3={el.address} setCheckbox={setCheckbox}/>
        </tr>
    ))

    return (
        <table>
            <thead>
            <tr>
                <th colSpan={4}>
                    <label>
                        <input type="checkbox" id="click" onClick={() => setSelectAll()} checked={mainCheckBox} readOnly/>
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

export default TableCompany;