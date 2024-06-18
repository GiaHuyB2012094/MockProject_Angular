export const bookingsData = [
    {
        id: 1,
        roomID: 1,
        userID: 1,
        fromDate: "Thu Jun 06 2024 17:35:09 GMT+0700 (Indochina Time)",
        toDate: "Thu Jun 06 2024 17:35:09 GMT+0700 (Indochina Time)",
        duration: 1,
        priceFormat: 'hour',
        payment: 'payLater',
        roomPriceTotal: 3000000,
        tax: 70000,
        services: {},
        userInfoBooking: {},
        status: "succesful",
    },
    {
        id: 2,
        roomID: 3,
        userID: 1,
        fromDate: "Thu Jun 10 2024 17:35:09 GMT+0700 (Indochina Time)",
        toDate: "Thu Jun 28 2024 17:35:09 GMT+0700 (Indochina Time)",
        duration: 1,
        priceFormat: 'hour',
        payment: 'payLater',
        roomPriceTotal: 3500000,
        tax: 70000,
        services: {},
        userInfoBooking: {},
        status: "succesful",
    },
    {
        id: 3,
        roomID: 1,
        userID: 1,
        fromDate: "2024-06-20T00:00:00.000Z",
        toDate: "2024-06-21T00:00:00.000Z",
        duration: 1,
        priceFormat: 'hour',
        payment: 'payLater',
        roomPriceTotal: 1050000,
        tax: 70000,
        services: [
            {
                id: 1,
                name:"Hire a tour guide",
                quantity: 1,
                totalPrice: 800000
            }
        ],
        userInfoBooking: {
            customerUsername:"",
            email:"http://localhost:4200/room/booking/2",
            phone:"1231231231",
            username:"http://localhost:4200/room/booking/2"
        },
        status: "succesful",
    },
]
