
export interface IBooking {
    id?: number;
    roomID: number,
    userID: number,

    fromDate: Date,
    toDate: Date,
    timeDate?: Date,
    duration: number,

    requests?: string,
    priceFormat: string,
    payment: string,
    
    roomPriceTotal: number,
    tax: number,
    
    services: any,
    userInfoBooking: any,


    status?: string,
    tours?: Array<any>,
    // ATM
    payATMimage?: string,
    // Pay Later
}