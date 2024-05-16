import { InMemoryDbService , RequestInfo } from "angular-in-memory-web-api";
import { Observable } from "rxjs";
import { IUser } from "../interfaces/IUser.interface";

export class MockData implements InMemoryDbService  {
    createDb(reqInfo?: RequestInfo | undefined): {} | Observable<{}> | Promise<{}> {
        const users: IUser[] = [
            {id: 1, username: 'giaHuy', email: 'huydevse040902@gmail.com'},
            {id: 2, username: 'giaHao', email: 'haodevse040902@gmail.com'},
            {id: 3, username: 'trungHieu', email: 'hieudevse040902@gmail.com'},
        ]
        return { users };
    }
}
