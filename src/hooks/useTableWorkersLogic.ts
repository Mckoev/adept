import {useAppSelector} from "../reduxToolkit/hooks";
import {ICompany, IWorkers} from "../types/interfaces";
import {getID} from "../helpers/getID";
import {store} from "../reduxToolkit/store";
import {selectedAllWorkersAction} from "../reduxToolkit/slices/selectedAllWorkers";
import {workersAction} from "../reduxToolkit/slices/workers";

export const useTableWorkersLogic = () => {

    const checkbox: boolean = useAppSelector((state) => state.selectedAllWorkers)
    const workers: IWorkers[] = useAppSelector((state) => state.workers);

    const setCheckbox = (id: string | undefined): void => {
        store.dispatch(selectedAllWorkersAction(false))
        const newList: IWorkers[] = workers.map((el: IWorkers) => (el.id === id ? {...el, checked: !el.checked} : {...el}));
        const newListChecked: IWorkers | undefined = newList.find(item => item.checked === false);
        if (!newListChecked) {
            store.dispatch(selectedAllWorkersAction(true))
        }
        store.dispatch(workersAction(newList))
    }

    const setSelectAll = (): void => {
        store.dispatch(selectedAllWorkersAction(!checkbox))
        const newList: IWorkers[] = workers.map((el) => ({...el, checked: !checkbox}));
        store.dispatch(workersAction(newList))
    }

    function getWorkers (checkedCompanies: ICompany[]) {
        let newWorkers: IWorkers[] = []
        checkedCompanies.forEach((el: any) => {
            newWorkers.push(el.workers)
        })
        const buffer: IWorkers[] = newWorkers.flat()
        newWorkers = []
        for (let i = 0; i < buffer.length; i += 1) {
            newWorkers.push({
                ...buffer[i],
                id: getID(),
                checked: checkbox
            })
        }
        return newWorkers
    }
    return {
        checkbox,
        workers,
        setCheckbox,
        setSelectAll,
        getWorkers
    }
}
