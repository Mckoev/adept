import {useTableWorkersLogic} from "hooks/useTableWorkersLogic";
import {IWorkers} from "types/interfaces";
import CellWorkers from "../Cell/CellWorkers";

function RowWorkers() {

    const {
        workers,
        setCheckbox,
        changeWorkers
    } = useTableWorkersLogic()

    const listItems = workers.map((el: IWorkers) => (
        <tr key={el.id} className={el.checked ? "yellow" : ""}>
            <CellWorkers el={el} cell1={el.name} cell2={el.surname} cell3={el.jobTitle}
                        setCheckbox={setCheckbox} changeWorkers={changeWorkers}/>
        </tr>
    ))

    /* eslint-disable */

    return (
        <>
            {listItems}
        </>
    );
}

export default RowWorkers;