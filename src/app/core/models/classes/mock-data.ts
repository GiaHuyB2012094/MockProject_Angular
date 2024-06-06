import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { IUser } from '../interfaces/IUser.interface';
import { IRoom } from '../interfaces/IRoom.interface';
import { userData } from '../data/users.data';
import { roomsData } from '../data/rooms.data';
import { conveniencesData } from '../data/conveniences.data';
import { IServices } from '../interfaces/IServices.interface';
import { servicesData } from '../data/services.data';
import { bookingsData } from '../data/booking.data';

export class MockData implements InMemoryDbService {
  createDb(
    reqInfo?: RequestInfo | undefined
  ): {} | Observable<{}> | Promise<{}> {
    const users: IUser[] = userData;
    const rooms: IRoom[] = roomsData;
    const conveniences: string[] = conveniencesData;
    const services: IServices[] = servicesData;
    const bookings: any[] = bookingsData;
    return { users, rooms, conveniences, services, bookings};
  }
}
