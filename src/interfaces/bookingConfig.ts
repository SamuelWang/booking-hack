import { BookingManner } from '../enums';
import { BookingParam } from './bookingParam';
import { BookingTime } from './bookingTime';

export interface BookingConfig {
  description: string;
  executeTime: BookingTime;
  id: string;
  manner: BookingManner;
  name: string;
  queryParams: BookingParam[];
  url: string;
}
