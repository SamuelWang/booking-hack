import { BookingParamFormType, BookingParamType } from '../enums';
import { BookingParamOption } from './bookingParamOption';

export interface BookingParam {
  displayName: string;
  formate?: string;
  formType: BookingParamFormType;
  name: string;
  options?: BookingParamOption[];
  type: BookingParamType;
  value: string;
}
