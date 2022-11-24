import {useTableCompanyLogic} from "hooks/useTableCompanyLogic";
import {ICompany} from "../../types/interfaces";
import Row from "../Cell/Row";

function ListItemCompanies() {

    const {
        companies,
        setCheckbox,
    } = useTableCompanyLogic()

    const listItems = companies.map((el: ICompany) => (
        <tr key={el.id} className={el.checked ? "green" : ""}>
            <Row el={el} cell1={el.company} cell2={el.workers.length.toString()} cell3={el.address}
                 setCheckbox={setCheckbox}/>
        </tr>
    ))
    return (
        <>
            {listItems}
        </>
    )
}

export default ListItemCompanies;