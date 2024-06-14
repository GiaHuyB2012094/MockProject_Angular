export interface IRoom {
    id: number;
    name: string;
    branch: number;
    desc: string;
    acreage: number;
    roomType: string;
    maxcount: number;
    address: string;
    level: string;
    
    price: Array<number>;
    imgs: Array<string>;
    nearbyTouristSpot: {name: string, distance: string}[];
    convenient: Array<string>;
    currentBooking: Array<any>;

    // rating
    ratingScore?: number;
    satisfactionScore?: {name: string, score: number}[];
    servicesScore?: {name: string, score: number}[];
  }
  