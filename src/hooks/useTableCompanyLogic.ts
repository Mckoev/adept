import {ICompany, IWorkers} from "types/interfaces";
import {useAppSelector} from "reduxToolkit/hooks";
import {store} from "reduxToolkit/store";
import {companiesAction} from "reduxToolkit/slices/companies";
import {workersAction} from "reduxToolkit/slices/workers";
import {selectedAllWorkersAction} from "reduxToolkit/slices/selectedAllWorkers";
import {useTableWorkersLogic} from "./useTableWorkersLogic";
import {selectedAllCompaniesAction} from "../reduxToolkit/slices/selectedAllCompanies";
import {showWorkersAction} from "../reduxToolkit/slices/showWorkers";

export const useTableCompanyLogic = () => {
    const checkbox: boolean = useAppSelector((state) => state.selectedAllCompanies)
    const companies: ICompany[] = useAppSelector((state) => state.companies);
    const {getWorkers} = useTableWorkersLogic()

    const setCheckbox = (id: string | undefined): void => {
        store.dispatch(selectedAllCompaniesAction(false))
        const newList: ICompany[] = companies.map((el) => {
            if (el.id === id) {
                return {
                    ...el,
                    checked: !el.checked
                }
            }
            return el
        });
        store.dispatch(companiesAction(newList))
        const newListChecked: ICompany | undefined = newList.find(item => !item.checked);
        if (!newListChecked) {
            store.dispatch(selectedAllCompaniesAction(true))
        }
        const checkedCompanies: ICompany[] = newList.filter((el) => el.checked);
        const workers: IWorkers[] = getWorkers(checkedCompanies)
        store.dispatch(workersAction(workers))
        if (!workers.length) {
            store.dispatch(selectedAllWorkersAction(false))
            store.dispatch(showWorkersAction(false))
        } else {
            store.dispatch(showWorkersAction(true))
        }
    }

    const setSelectAll = (): void => {
        store.dispatch(selectedAllCompaniesAction(!checkbox))
        const newList: ICompany[] = [...companies.map((el) => ({...el, checked: !checkbox}))];
        store.dispatch(companiesAction(newList))
        const workers: IWorkers[] = getWorkers(newList)
        store.dispatch(workersAction(workers))
        if (!workers.length) {
            store.dispatch(selectedAllWorkersAction(false))
            store.dispatch(showWorkersAction(false))
        } else {
            store.dispatch(showWorkersAction(true))
        }
        if (checkbox) {
            store.dispatch((workersAction([])))
            store.dispatch(selectedAllWorkersAction(false))
        }
    }

    return {
        companies,
        checkbox,
        setCheckbox,
        setSelectAll
    }
}
