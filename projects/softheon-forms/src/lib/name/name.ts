import { Suffix } from "./suffix.enum"

/**
 * Contains a name object
 */
export interface Name {
  /** The first name */
  firstName: string;

  /** The middle name */
  middleName?: string;

  /** The last name */
  lastName: string;

  /** The suffix */
  suffix?: Suffix;
}