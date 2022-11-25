import {TABLE_COLUMN_NAMES} from "../constants/constants";
import ListItemCompanies from "../components/ListItems/ListItemCompanies";

export interface ICompany {
    id: string | undefined;
    company: string;
    address: string;
    checked: boolean;
    workers: IWorkers[];
}

export interface IWorkers {
    name: string;
    surname: string;
    jobTitle: string;
    id?: string;
    checked?: boolean
}

export interface IRow {
    el: ICompany | IWorkers;
    cell1: string;
    cell2: string;
    cell3: string;
    setCheckbox: (e: string | undefined) => void;
}

export interface ITable {
    column1: string;
    column2: string;
    column3: string;
    child: any;
    companies: ICompany[] | IWorkers[];
    checkbox: boolean;
    setCheckbox: (e: string | undefined) => void;
    setSelectAll: (e: string | undefined) => void;
}
