import './App.css';
import {useEffect} from "react";
import {store} from "reduxToolkit/store";
import {setCompanies} from "reduxToolkit/slices/companies";
import {mock} from "mock/mock";
import {TABLE_COLUMN_NAMES} from "constants/constants";
import {useTableCompanyLogic} from "../hooks/useTableCompanyLogic";
import Table from "../components/Table/Table";
import {useTableWorkersLogic} from "../hooks/useTableWorkersLogic";
import RowCompanies from "../components/Row/RowCompanies";
import RowWorkers from "../components/Row/RowWorkers";
import {useAppSelector} from "../reduxToolkit/hooks";

function App() {

    const showWorkers: boolean = useAppSelector((state) => state.showWorkers)

    useEffect(() => {
        store.dispatch(setCompanies(mock))
    }, [])

    const {
        companies,
        checkbox,
        setCheckbox,
        setSelectAll,
        removeEl,
        addEl
    } = useTableCompanyLogic()

    const {
        checkbox: checkboxWorkers,
        workers,
        setCheckbox: setCheckboxWorkers,
        setSelectAll: setSelectAllWorkers,
        removeEl: removeElWorkers,
        addEl: addElWorker
    } = useTableWorkersLogic()



    const tableCompanyProps = {
        column1: TABLE_COLUMN_NAMES.COMPANY_NAME,
        column2: TABLE_COLUMN_NAMES.AMOUNT_WORKERS,
        column3: TABLE_COLUMN_NAMES.ADDRESS,
        child: <RowCompanies/>,
        companies,
        checkbox,
        setCheckbox,
        setSelectAll,
        removeEl,
        addEl
    }

    const tableWorkersProps = {
        column1: TABLE_COLUMN_NAMES.NAME_WORKER,
        column2: TABLE_COLUMN_NAMES.SURNAME_WORKER,
        column3: TABLE_COLUMN_NAMES.JOB_TITLE,
        child: <RowWorkers/>,
        companies: workers,
        checkbox: checkboxWorkers,
        setCheckbox: setCheckboxWorkers,
        setSelectAll: setSelectAllWorkers,
        removeEl: removeElWorkers,
        addEl: addElWorker
    }

    return (
        <div className="App">
            <Table data={tableCompanyProps}/>
            {showWorkers && < Table data={tableWorkersProps}/>}
        </div>
    );
}

export default App;
