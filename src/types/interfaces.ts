
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

export interface IElement {
    el: ICompany;
}

export interface ICell {
    el: ICompany | IWorkers;
    cell1: string;
    cell2: string;
    cell3: string;
    setCheckbox: (e: string | undefined) => void;
}

export interface ITableprops {
    column1: string;
    column2: string;
    column3: string;
}
