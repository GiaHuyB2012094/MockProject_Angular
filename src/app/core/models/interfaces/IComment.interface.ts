export  interface IComment {
    id: number;
    userID: number;
    roomID: number;
    body: string;

    username: string;
    parentID: number | null;
    createdAt: string;
  } 