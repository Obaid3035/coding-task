import BigNumber from "bignumber.js";
import {IData} from "../App";


export const mockData: IData[] = [{
    id: getRandomId(),
    name: 'Actor 1',
    price: 2000,
    percentage: 20,
    total: 20
}, {
    id: getRandomId(),
    name: 'Actor 2',
    price: 2000,
    percentage: 20,
    total: 20
}]

export function calculateTotalPrice(price: number, percentage: number) {
    const p = new BigNumber(price)
    const m = new BigNumber(percentage);
    return p.plus(p.multipliedBy(m.dividedBy(100)));
}

export function sumOfExpenses(data: IData[]) {
    return data.reduce((sum, entry) => {
        const entryTotal = new BigNumber(entry.total);
        return sum.plus(entryTotal);
    }, new BigNumber(0));
}
export function getRandomId() {
    const randomNumber = Math.floor(Math.random() * 1000000);
    return randomNumber.toString();
}
