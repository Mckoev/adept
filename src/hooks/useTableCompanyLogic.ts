import {useState} from "react";
import {ICompany, IWorkers} from "types/interfaces";
import {useAppSelector} from "reduxToolkit/hooks";
import {store} from "reduxToolkit/store";
import {companiesAction} from "reduxToolkit/slices/companies";
import {workersAction} from "reduxToolkit/slices/workers";
import {selectedAllWorkersAction} from "reduxToolkit/slices/selectedAllWorkers";
import {useTableWorkersLogic} from "./useTableWorkersLogic";

export const useTableCompanyLogic = () => {
    const companies: ICompany[] = useAppSelector((state) => state.companies);
    const [mainCheckBox, setMainCheckbox] = useState(false)
    const {getWorkers} = useTableWorkersLogic()

    const setCheckbox = (id: string | undefined): void => {
        setMainCheckbox(false)
        const newList: ICompany[] = [...companies.map((el) => (el.id === id ? {
            ...el,
            checked: !el.checked
        } : {...el}))];
        store.dispatch(companiesAction(newList))
        const newListChecked: ICompany | undefined = newList.find(item => !item.checked);
        if (!newListChecked) {
            setMainCheckbox(true)
        }
        const checkedCompanies: ICompany[] = newList.filter((el) => el.checked);
        const workers: IWorkers[] = getWorkers(checkedCompanies)
        store.dispatch(workersAction(workers))
        if (!workers.length) {
            store.dispatch(selectedAllWorkersAction(false))
        }
    }

    const setSelectAll = (): void => {
        setMainCheckbox(!mainCheckBox)
        const newList: ICompany[] = [...companies.map((el) => ({...el, checked: !mainCheckBox}))];
        store.dispatch(companiesAction(newList))
        const workers: IWorkers[] = getWorkers(newList)
        store.dispatch(workersAction(workers))
        if (!workers.length) {
            store.dispatch(selectedAllWorkersAction(false))
        }
        if (mainCheckBox) {
            store.dispatch((workersAction([])))
            store.dispatch(selectedAllWorkersAction(false))
        }
    }

    return {
        companies,
        mainCheckBox,
        setCheckbox,
        setSelectAll
    }
}
