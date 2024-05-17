import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { IUser } from '../interfaces/IUser.interface';

export class MockData implements InMemoryDbService {
  createDb(
    reqInfo?: RequestInfo | undefined
  ): {} | Observable<{}> | Promise<{}> {
    const users: IUser[] = [
      {
        id: 1,
        username: 'gia huy',
        email: 'huyb2012094@student.ctu.edu.vn',
        password: '123456',
      },
      {
        id: 2,
        username: 'gia hao',
        email: 'haodevse040902@gmail.com',
        password: '1234567889',
      },
      {
        id: 3,
        username: 'trung hieu',
        email: 'hieudevse040902@gmail.com',
        password: '1234567889',
      },
    ];
    return { users };
  }
}
