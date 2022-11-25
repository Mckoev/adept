import './App.css';
import {useEffect} from "react";
import {store} from "reduxToolkit/store";
import {companiesAction} from "reduxToolkit/slices/companies";
import {mock} from "mock/mock";
import {TABLE_COLUMN_NAMES} from "constants/constants";
import {useTableCompanyLogic} from "../hooks/useTableCompanyLogic";
import Table from "../components/Table/Table";
import {useTableWorkersLogic} from "../hooks/useTableWorkersLogic";
import ListItemCompanies from "../components/ListItems/ListItemCompanies";
import ListItemWorkers from "../components/ListItems/ListItemWorkers";
import {useAppSelector} from "../reduxToolkit/hooks";

function App() {

    const showWorkers: boolean = useAppSelector((state) => state.showWorkers)

    useEffect(() => {
        store.dispatch(companiesAction(mock))
    }, [])

    const {
        companies,
        checkbox,
        setCheckbox,
        setSelectAll
    } = useTableCompanyLogic()

    const {
        checkbox: checkboxWorkers,
        workers,
        setCheckbox: setCheckboxWorkers,
        setSelectAll: setSelectAllWorkers,
    } = useTableWorkersLogic()



    const tableCompanyProps = {
        column1: TABLE_COLUMN_NAMES.COMPANY_NAME,
        column2: TABLE_COLUMN_NAMES.AMOUNT_WORKERS,
        column3: TABLE_COLUMN_NAMES.ADDRESS,
        child: <ListItemCompanies/>,
        companies,
        checkbox,
        setCheckbox,
        setSelectAll
    }

    const tableWorkersProps = {
        column1: TABLE_COLUMN_NAMES.NAME_WORKER,
        column2: TABLE_COLUMN_NAMES.SURNAME_WORKER,
        column3: TABLE_COLUMN_NAMES.JOB_TITLE,
        child: <ListItemWorkers/>,
        companies: workers,
        checkbox: checkboxWorkers,
        setCheckbox: setCheckboxWorkers,
        setSelectAll: setSelectAllWorkers
    }

    return (
        <div className="App">
            <Table data={tableCompanyProps}/>
            {showWorkers && < Table data={tableWorkersProps}/>}
        </div>
    );
}

export default App;
