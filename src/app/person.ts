import { Name, Address, Suffix } from 'softheon-forms';

export class Person implements Name, Address {
    streetName1: string = "";
    streetName2: string = "";
    cityName: string = "";
    stateCode: string = "";
    zipCode: string = "";
    firstName: string = "";
    middleName?: string = "";
    lastName: string = "";
    suffix?: Suffix;
}