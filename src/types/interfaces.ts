import {FormEvent} from "react";

export interface ICompany {
    id: string;
    company: string;
    address: string;
    checked: boolean;
    workers: IWorkers[];
}

interface IWorkers {
    name: string;
    jobTitle: string;
}

export interface IElement {
    el: ICompany;
}

export interface ICell {
    el: ICompany;
    setCheckbox: (e: string) => void;
}
