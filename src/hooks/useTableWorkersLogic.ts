import {useAppSelector} from "reduxToolkit/hooks";
import {ICompany, IWorkers} from "types/interfaces";
import {store} from "reduxToolkit/store";
import {selectedAllWorkersAction} from "reduxToolkit/slices/selectedAllWorkers";
import {workersAction} from "reduxToolkit/slices/workers";
import {setCompanies} from "../reduxToolkit/slices/companies";
import {getID} from "../mock/mock";

export const useTableWorkersLogic = () => {
    const checkbox: boolean = useAppSelector((state) => state.selectedAllWorkers)
    const workers: IWorkers[] = useAppSelector((state) => state.workers);
    const companies: ICompany[] = useAppSelector((state) => state.companies);

    const setCheckbox = (id: string | undefined): void => {
        store.dispatch(selectedAllWorkersAction(false))
        const newList: IWorkers[] = workers.map((el: IWorkers) => {
            if (el.id === id) {
                return {
                    ...el,
                    checked: !el.checked
                }
            }
            return el
        });
        const newListChecked: IWorkers | undefined = newList.find(item => item.checked === false);
        if (!newListChecked) {
            store.dispatch(selectedAllWorkersAction(true))
        } else {
            store.dispatch(selectedAllWorkersAction(false))
        }
        store.dispatch(workersAction(newList))
    }

    const setSelectAll = (): void => {
        store.dispatch(selectedAllWorkersAction(!checkbox))
        const newList: IWorkers[] = workers.map((el) => ({...el, checked: !checkbox}));
        store.dispatch(workersAction(newList))
    }

    function getWorkers(checkedCompanies: ICompany[]) {
        const onlyWorkers = checkedCompanies.map((item) => item.workers)
        const checkedWorkers = onlyWorkers.flat().map((item) => ({...item, checked: checkbox}))
        return checkedWorkers.flat()
    }

    const removeEl = () => {
        const remainingWorkers: IWorkers[] = workers.filter((el) => !el.checked);
        const removedWorkers: IWorkers[] = workers.filter((el) => el.checked);
        let filteredWorker: any
        const newList: ICompany[] = companies.map((el) => {
            if (el.checked) {
                filteredWorker = el.workers.filter((item) => {
                    const rem = removedWorkers.find((i) => i.id === item.id)
                    return !rem
                })
                return {
                    ...el,
                    workers: filteredWorker
                }
            }
            return el
        });
        if (workers.length) {
            store.dispatch(selectedAllWorkersAction(false))
        }
        store.dispatch(setCompanies(newList))
        store.dispatch(workersAction(remainingWorkers))
    }

    const addEl = () => {
        const emptyWorker: IWorkers = {
            id: getID(),
            name: '',
            surname: '',
            jobTitle: ''
        }
        const newCompanies = companies.map((el) => {
            if (el.checked) {
                return {
                    ...el,
                    workers: [...el.workers, emptyWorker]
                }
            }
            return el
        })
        console.log(newCompanies)
        store.dispatch(setCompanies(newCompanies))

    }

    const changeWorkers = (newNameWorker: string, newSurnameWorker: string, newJobTitleWorker: string, worker: IWorkers) => {
        let changeWorker: IWorkers[] = []
        const newCompanies = companies.map((el) => {
            if (el.checked) {
                changeWorker = el.workers.map((item) => {
                    if (item.id === worker.id) {
                        return {
                            ...item,
                            name: newNameWorker,
                            surname: newSurnameWorker,
                            jobTitle: newJobTitleWorker
                        }
                    }
                    return item
                })
                return {
                    ...el,
                    workers: changeWorker
                }
            }
            return el
        })
        store.dispatch(setCompanies(newCompanies))
    }

    return {
        checkbox,
        workers,
        setCheckbox,
        setSelectAll,
        getWorkers,
        removeEl,
        addEl,
        changeWorkers
    }
}
