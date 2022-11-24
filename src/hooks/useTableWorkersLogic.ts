import {useAppSelector} from "reduxToolkit/hooks";
import {ICompany, IWorkers} from "types/interfaces";
import {store} from "reduxToolkit/store";
import {selectedAllWorkersAction} from "reduxToolkit/slices/selectedAllWorkers";
import {workersAction} from "reduxToolkit/slices/workers";

export const useTableWorkersLogic = () => {

    const checkbox: boolean = useAppSelector((state) => state.selectedAllWorkers)
    const workers: IWorkers[] = useAppSelector((state) => state.workers);

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
        }
        store.dispatch(workersAction(newList))
    }

    const setSelectAll = (): void => {
        store.dispatch(selectedAllWorkersAction(!checkbox))
        const newList: IWorkers[] = workers.map((el) => ({...el, checked: !checkbox}));
        store.dispatch(workersAction(newList))
    }

    function getWorkers(checkedCompanies: ICompany[]) {
        console.log(checkedCompanies)
        const onlyWorkers = checkedCompanies.map((item) => item.workers)
        const checkedWorkers = onlyWorkers.flat().map((item) => ({...item, checked: checkbox}))
        return checkedWorkers.flat()
    }

    return {
        checkbox,
        workers,
        setCheckbox,
        setSelectAll,
        getWorkers
    }
}
