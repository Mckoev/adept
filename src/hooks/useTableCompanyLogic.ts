import {ICompany, IWorkers} from "types/interfaces";
import {useAppSelector} from "reduxToolkit/hooks";
import {store} from "reduxToolkit/store";
import {addCompany, changeCompany, removeCompany, setCompanies} from "reduxToolkit/slices/companies";
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
        const updatedCompanies: ICompany[] = companies.map((el) => {  // get an updated list of companies
            if (el.id === id) {
                return {
                    ...el,
                    checked: !el.checked
                }
            }
            return el
        });
        store.dispatch(setCompanies(updatedCompanies))
        const newListChecked: ICompany | undefined = updatedCompanies.find(item => !item.checked);
        if (!newListChecked) {
            store.dispatch(selectedAllCompaniesAction(true))
        }
        const checkedCompanies: ICompany[] = updatedCompanies.filter((el) => el.checked);
        const workers: IWorkers[] = getWorkers(checkedCompanies)             // get workers in selected companies
        store.dispatch(workersAction(workers))
        if (!workers.length) {
             store.dispatch(selectedAllWorkersAction(false))
        }
        if (checkedCompanies.length) {
            store.dispatch(showWorkersAction(true))
        } else {
            store.dispatch(showWorkersAction(false))
        }
    }

    const setSelectAll = (): void => {
        store.dispatch(selectedAllCompaniesAction(!checkbox))
        const newList: ICompany[] = companies.map((el) => ({...el, checked: !checkbox})); // check all campaigns
        store.dispatch(setCompanies(newList))
        const workers: IWorkers[] = getWorkers(newList)                                       // get all workers in all companies
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
            store.dispatch(showWorkersAction(false))
        }
    }

    const removeEl = () => {
        if (companies.length) {
            store.dispatch(selectedAllCompaniesAction(false))
        }
        /* eslint-disable */
        // @ts-ignore
        store.dispatch(removeCompany())
        store.dispatch(showWorkersAction(false))
        /* eslint-enable */
    }

    const addEl = () => {
        const emptyCompany: ICompany = {
            id: getID(),
            company: '',
            address: '',
            checked: checkbox,
            workers: []
        }
        store.dispatch(addCompany(emptyCompany))
    }

    const changeEl = (newNameCompany: string, newAddress: string, company: ICompany) => {
        store.dispatch(changeCompany({newNameCompany, newAddress, company}))
    }

    return {
        companies,
        checkbox,
        setCheckbox,
        setSelectAll,
        removeEl,
        addEl,
        changeEl
    }
}
