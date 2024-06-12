export  interface IComment {
    id: number;
    userID: number;
    roomID: number;
    body: string;

    username: string;
    parentID: number | null;
    
    avarageScore?: number;

    rateSatisfaction?: string; 
    rateSerivces?: Array<number>; 

    createdAt: string;
  } 