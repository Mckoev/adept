import type {PayloadAction} from '@reduxjs/toolkit'
import {createSlice} from '@reduxjs/toolkit';
import {getID} from "../../mock/mock";
import {ICompany, IWorkers} from "../../types/interfaces";

interface IChangeCompany {
    newNameCompany: string;
    newAddress: string;
    company: ICompany;
    workers?: IWorkers;
}

const companies = createSlice({
    name: 'companies',
    initialState: [
        {
            id: getID(),
            company: '',
            address: '',
            checked: false,
            workers: []
        }
    ],
    reducers: {
        setCompanies(state, action) {
            return action.payload
        },
        addCompany(state, action: PayloadAction<any>) {
            state.push(action.payload)
        },
        removeCompany(state) {
            return state.filter((el) => !el.checked)
        },
        //@ts-ignore
        changeCompany(state, action: any) {
            const {newNameCompany, newAddress, company} = action.payload
            return  state.map((el: ICompany) => {
                if (el.id === company.id) {
                    return {
                        ...el,
                        company: newNameCompany,
                        address: newAddress
                    }
                }
                return  el
            })
        },
    },
});

export default companies.reducer;
export const {setCompanies, addCompany, removeCompany, changeCompany} = companies.actions;
