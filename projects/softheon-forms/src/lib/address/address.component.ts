import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { Address } from './address';

/**
 * The address component
 */
@Component({
  selector: 'softheon-form-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  /** The address model */
  @Input()
  public address: Address;

  /** An ID used to differentiate a component when multiple instances appears on the same page */
  @Input()
  public id: string = '';

  /** Whether the component should be read-only */
  @Input()
  public readonly: boolean = false;

  /** Whether the address is required. Defaults to true */
  @Input()
  public required: boolean = true;

  /** Whether the street name 2 field should be shown */
  @Input()
  public showStreetName2: boolean = true;

  /** True if the state input should be disabled */
  @Input()
  public disableState: boolean;

  /** The default state code */
  @Input()
  public defaultState: string;

  /** Whether or not to allow zip code to be greater than 5 digits */
  @Input()
  public showZipCodeExt: boolean = true;

  /** True if just the zip field should be shown */
  @Input()
  public justZip: boolean;

  /** The zip code mask */
  public zipCodeMask: (RegExp | string)[];

  /** The possible zip code length values */
  public readonly zipCodeLengthRange: number[] = [5, 9];

  /** Default constructor */
  constructor() { }

  /**
   * Called on initialization
   */
  public ngOnInit(): void {
    if (!this.address) {
      return;
    }
    this.setZipMask();
  }

  /**
   * Gets the zip code mask
   */
  private setZipMask(): void {
    let zipBase = this.zipCodeBase();
    
    // Use full zip code if zip code is empty or length greater than 5 (to allow copy/paste)
    if (this.showZipCodeExt && (this.zipCodeExt() || (zipBase && zipBase.length > 5))) {
      this.zipCodeMask = [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
      if (zipBase && zipBase.length > 5) {
        this.address.zipCode = `${zipBase.slice(0, 5)}-${zipBase.slice(5)}`
      }
    }
    else if (this.showZipCodeExt) {
      // Allow 9 characters. If the length passes 5 characters, the condition above will be hit to change formatting.
      // This allows copy/pasting of a full 9-digit zip code.
      this.zipCodeMask = [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/];
    }
    else {
      // If not showing zip code extension, only allow 5 characters
      this.zipCodeMask = [/\d/, /\d/, /\d/, /\d/, /\d/];
    }
  }

  /** The base 5-digit zip code */
  private zipCodeBase(): string {
    if (this.address.zipCode && this.address.zipCode.indexOf('-') > -1) {
      return this.address.zipCode.split('-')[0];
    }
    return this.address.zipCode;
  }

  /** The four-digit delivery area of the zip code extension */
  private zipCodeExt(): string {
    if (this.address.zipCode && this.address.zipCode.indexOf('-') > -1) {
      return this.address.zipCode.split('-')[1];
    }
    return null;
  }
}
