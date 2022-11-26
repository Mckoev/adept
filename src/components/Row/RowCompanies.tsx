import {useTableCompanyLogic} from "hooks/useTableCompanyLogic";
import {ICompany} from "../../types/interfaces";
import CellCompany from "../Cell/CellCompany";

function RowCompanies() {

    const {
        companies,
        setCheckbox,
        changeEl
    } = useTableCompanyLogic()

    const listItems = companies.map((el: ICompany) => (
        <tr key={el.id} className={el.checked ? "yellow" : ""}>
            <CellCompany el={el} cell1={el.company} cell2={el.workers.length.toString()} cell3={el.address}
                         setCheckbox={setCheckbox} changeCompany={changeEl}/>
        </tr>
    ))
    /* eslint-disable */

    return (
        <>
            {listItems}
        </>
    )
}

export default RowCompanies;