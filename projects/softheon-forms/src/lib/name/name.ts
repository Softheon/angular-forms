import { Suffix } from "./suffix.enum"

/**
 * Contains a name object
 */
export class Name {
  /** The first name */
  public firstName: string = "";

  /** The middle name */
  public middleName?: string = "";

  /** The last name */
  public lastName: string = "";

  /** The suffix */
  public suffix?: Suffix;

    /**
   * Gets the full name
   * @returns The full name
   */
  public get fullName(): string {
    let fullName = this.firstName;
    if (this.middleName) {
      fullName = `${fullName} ${this.middleName}`;
    }
    fullName = `${fullName} ${this.lastName}`;
    if (this.suffix) {
      fullName = `${fullName} ${this.suffix}`;
    }
    return fullName;
  }
}
