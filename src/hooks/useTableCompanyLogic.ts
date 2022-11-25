import {ICompany, IWorkers} from "types/interfaces";
import {useAppSelector} from "reduxToolkit/hooks";
import {store} from "reduxToolkit/store";
import {companiesAction} from "reduxToolkit/slices/companies";
import {workersAction} from "reduxToolkit/slices/workers";
import {selectedAllWorkersAction} from "reduxToolkit/slices/selectedAllWorkers";
import {useTableWorkersLogic} from "./useTableWorkersLogic";
import {selectedAllCompaniesAction} from "../reduxToolkit/slices/selectedAllCompanies";
import {showWorkersAction} from "../reduxToolkit/slices/showWorkers";
import {getID} from "../mock/mock";

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
        const newList: ICompany[] = companies.map((el) => ({...el, checked: !checkbox}));
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

    const removeEl = () => {
        const remainingCompanies: ICompany[] = companies.filter((el) => !el.checked);
        if (companies.length) {
            store.dispatch(selectedAllCompaniesAction(false))
        }
        store.dispatch(companiesAction(remainingCompanies))
        store.dispatch(showWorkersAction(false))
    }

    const addEl = () => {
        const emptyCompany: ICompany = {
            id: getID(),
            company: '',
            address: '',
            checked: false,
            workers: []
        }
        const newListCompanies: ICompany[] = [...companies]
        newListCompanies.push(emptyCompany)
        store.dispatch(companiesAction(newListCompanies))
    }

    const changeCompany = (newNameCompany: string, newAddress: string, company: ICompany) => {
        const nameCompany = companies.map((el) => {
            if (el.id === company.id) {
                return {
                    ...el,
                    company: newNameCompany,
                    address: newAddress
                }
            }
            return  el
        })
        store.dispatch(companiesAction(nameCompany))
    }

    return {
        companies,
        checkbox,
        setCheckbox,
        setSelectAll,
        removeEl,
        addEl,
        changeCompany
    }
}
