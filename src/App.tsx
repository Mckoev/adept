import './App.css';
import {useEffect} from "react";
import {store} from "./reduxToolkit/store";
import {companiesAction} from "./reduxToolkit/slices/companies";
import {mock} from "./mock/mock";
import TableCompany from "./pages/TableCompany";
import {TABLE_COLUMN_NAMES} from "./constants/constants";
import TableWorkers from "./pages/TableWorkers";

function App() {

    useEffect(() => {
        store.dispatch(companiesAction(mock))
    }, [])

  return (
    <div className="App">
        <TableCompany column1={TABLE_COLUMN_NAMES.COMPANY_NAME} column2={TABLE_COLUMN_NAMES.AMOUNT_WORKERS} column3={TABLE_COLUMN_NAMES.ADDRESS}/>
        <TableWorkers column1={TABLE_COLUMN_NAMES.NAME_WORKER} column2={TABLE_COLUMN_NAMES.SURNAME_WORKER} column3={TABLE_COLUMN_NAMES.JOB_TITLE}/>
    </div>
  );
}

export default App;
