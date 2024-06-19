export interface ITour {
    id?: number;
    branch: number;
    name: string,
    adult: {name: string, price: number},
    children: {name: string, price: number},
    desc: string,
    places: {name: string, imgs: Array<string>, desc: string}[],
    departureTime: string,
}