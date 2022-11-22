import './App.css';
import {useEffect} from "react";
import {store} from "./reduxToolkit/store";
import {companiesAction} from "./reduxToolkit/slices/companies";
import {mock} from "./mock/mock";
import TableCompany from "./pages/TableCompany";

function App() {

    useEffect(() => {
        store.dispatch(companiesAction(mock))
    }, [])

  return (
    <div className="App">
        <TableCompany />
    </div>
  );
}

export default App;
