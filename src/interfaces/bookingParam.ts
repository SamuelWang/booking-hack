import { BookingParamFormType } from '../enums';
import { BookingParamOption } from './bookingParamOption';

export interface BookingParam {
  displayName: string;
  formate?: string;
  formType: BookingParamFormType;
  name: string;
  options?: BookingParamOption[];
  value: string;
}
