import { Flight } from '../components/flight';

export class mockFlightData {
  public static mfData: Flight[] = [
    {
      fullName: 'Nanthapong Doangjinda',
      from: 'Russia',
      to: 'Ukraine',
      type: 'One way',
      adults: 1,
      departure: new Date('2022-03-10'),
      children: 2,
      infants: 3,
      arrival: new Date('2022-03-15'),
    },
  ];
}
