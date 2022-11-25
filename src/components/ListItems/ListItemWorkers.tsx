import {useTableWorkersLogic} from "hooks/useTableWorkersLogic";
import {IWorkers} from "types/interfaces";
import RowWorkers from "../Row/RowWorkers";

function ListItemWorkers() {

    const {
        workers,
        setCheckbox,
    } = useTableWorkersLogic()

    const listItems = workers.map((el: IWorkers) => (
        <tr key={el.id} className={el.checked ? "green" : ""}>
            <RowWorkers el={el} cell1={el.name} cell2={el.surname} cell3={el.jobTitle}
                        setCheckbox={setCheckbox}/>
        </tr>
    ))
    return (
        <>
            {listItems}
        </>
    );
}

export default ListItemWorkers;