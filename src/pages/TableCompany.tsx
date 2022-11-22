import {useState} from "react";
import {useAppSelector} from "../reduxToolkit/hooks";
import Cell from "../components/tableCompany/Cell";
import {ICompany} from "../types/interfaces";
import {store} from "../reduxToolkit/store";
import {companiesAction} from "../reduxToolkit/slices/companies";

function TableCompany() {

    const companies: ICompany[] = useAppSelector((state) => state.companies);

    const [mainCheckBox, setMainCheckbox] = useState<boolean>(false)


    const setCheckbox = (id: string): void => {
        const newList = [...companies.map((el) => (el.id === id ? {...el, checked: !el.checked} : {...el}))];
        store.dispatch(companiesAction(newList))
    }

    const setSelectAll = (): void => {
        setMainCheckbox(!mainCheckBox)
        const newList = [...companies.map((el) => ( {...el, checked: !mainCheckBox} ))];
        store.dispatch(companiesAction(newList))
    }

    const listItems = companies.map((el: ICompany) => (
        <tr key={el.id} className={el.checked ? "green" : ""}>
            <Cell el={el} setCheckbox={setCheckbox}/>
        </tr>
    ))

    return (
        <table>
            <thead>
            <tr>
                <th colSpan={4}>
                    <label>
                        <input type="checkbox" id="click" onClick={() => setSelectAll()}/>
                        Выделить всё
                    </label>
                </th>
            </tr>
            <tr>
                <th>
                    Чекбокс
                </th>
                <th>
                    Company
                </th>
                <th>
                    Amount workers
                </th>
                <th>
                    Address
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