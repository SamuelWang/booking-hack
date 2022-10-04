import { BookingConfig } from '../interfaces';
import { v4 as uuidv4 } from 'uuid';
import { BookingManner, BookingParamFormType } from '../enums';

export const bookingConfigs: BookingConfig[] = [
  {
    description: '記得先在使用的瀏覽器登入過南港運動中心的帳號。',
    executeTime: {
      hour: 0,
      minute: 0,
      second: 0,
    },
    id: uuidv4(),
    manner: BookingManner.URL,
    name: '南港運動中心羽球場地',
    queryParams: [
      {
        displayName: 'module',
        formType: BookingParamFormType.None,
        name: 'module',
        value: 'net_booking',
      },
      {
        displayName: 'files',
        formType: BookingParamFormType.None,
        name: 'files',
        value: 'booking_place',
      },
      {
        displayName: 'StepFlag',
        formType: BookingParamFormType.None,
        name: 'StepFlag',
        value: '25',
      },
      {
        displayName: 'PT',
        formType: BookingParamFormType.None,
        name: 'PT',
        value: '1',
      },
      {
        displayName: '日期',
        formType: BookingParamFormType.Date,
        name: 'D',
        value: '',
      },
      {
        displayName: '場地',
        formType: BookingParamFormType.Dropdown,
        name: 'QPid',
        options: [
          {
            name: 'A',
            value: '83',
          },
          {
            name: 'B',
            value: '84',
          },
          {
            name: 'C',
            value: '1074',
          },
          {
            name: 'D',
            value: '1075',
          },
          {
            name: 'E',
            value: '87',
          },
          {
            name: 'F',
            value: '88',
          },
        ],
        value: '',
      },
      {
        displayName: '時間',
        formType: BookingParamFormType.Dropdown,
        name: 'QTime',
        options: [
          {
            name: '06:00~07:00',
            value: '6',
          },
          {
            name: '07:00~08:00',
            value: '7',
          },
          {
            name: '08:00~09:00',
            value: '8',
          },
          {
            name: '09:00~10:00',
            value: '9',
          },
          {
            name: '10:00~11:00',
            value: '10',
          },
          {
            name: '11:00~12:00',
            value: '11',
          },
          {
            name: '12:00~13:00',
            value: '12',
          },
          {
            name: '13:00~14:00',
            value: '13',
          },
          {
            name: '14:00~15:00',
            value: '14',
          },
          {
            name: '15:00~16:00',
            value: '15',
          },
          {
            name: '16:00~17:00',
            value: '16',
          },
          {
            name: '17:00~18:00',
            value: '17',
          },
          {
            name: '18:00~19:00',
            value: '18',
          },
          {
            name: '19:00~20:00',
            value: '19',
          },
          {
            name: '20:00~21:00',
            value: '20',
          },
          {
            name: '21:00~22:00',
            value: '21',
          },
        ],
        value: '',
      },
    ],
    url: 'https://scr.cyc.org.tw/tp02.aspx',
  },
];
