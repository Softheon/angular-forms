/**
 * The address model
 */
export interface Address {
  /** The first line of the street address. */
  streetName1: string;

  /** The second line of the street address. */
  streetName2: string;

  /** The name of the city where the address is located. */
  cityName: string;

  /** The two letter USPS State Code */
  stateCode: string;

  /** The full five-or-nine-digit zip code zip code */
  zipCode: string;
}
