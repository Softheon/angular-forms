# Softheon Forms

Softheon Forms provides Angular developers pre defined form components so developers can quickly create forms in their web applications. 
---
## **Quick Links**

* [Getting Started](#getting-started)
* [Components](#components)
    * [Address](#address-component)
    * [Alert](#alert-component)
    * [Amount](#amount-component)
    * [Checkbox Validator](#checkbox-validator-component)
    * [Currency](#currency-component)
    * [Date Picker](#date-picker-component)
    * [Email](#email)
    * [Name](#name-component)
    * [Phone Number](#phone-number-component)
    * [Relationship](#relationship-component)
    * [Social Security Number](#social-security-number-component)
    * [State](#state-component)
    * [Status Frame](#status-frame-component)
    * [Yes/No Question](#yes/no-question-component)
* [Directives](#directives)
    * [Letters Only](#letters-only-directive)
    * [Number of Digits](#number-of-digits-directive)
    * [Number of Digits Range](#number-of-digits-range-directive)
    * [Numbers Only](#numbers-only-directive)
    * [Provide Parent Form](#provide-parent-form-directive)
* [NPM Repository](https://www.npmjs.com/package/@softheon/forms)
---
## **Getting Started**

### **Step 1: Install Softheon Forms**

#### Install the package.

```shell
npm install --save @softheon/forms@latest
```

#### Include a link to Softheon Workshop

```html
<link rel="stylesheet" ref="https://softheonworkshop.azureedge.net/alpha-9-5/workshop.min.css">
```  

### **Step 2: Install the component modules**

#### Import the NgModule for each component you want to use:

```TypeScript
import { SofNameModule, SofAddressModule } from '@softheon/forms';
@NgModule({
    ...
    imports: [SofNameModule, SofAddressModule]
    ...
})
export class MyAppModule { }
```

#### Alternatively, you can create a separate NgModule that imports all of the Angular Material components that you will use in your application. Then you can include this module wherever you'd like to use the components.

```TypeScript
import { SofNameModule, SofAddressModule } from '@softheon/forms';
@NgModule({
    ...
    imports: [SofNameModule, SofAddressModule],
    exports: [SofNameModule, SofAddressModule]
    ...
})
export class MyCustomSoftheonFormsModule { }
```
---
## **Components**

### **Address Component**

#### `<softheon-form-address>` is a component used to wrap several Softheon inputs together which allows a user to enter their address.

#### API reference for Softheon Address Component

```TypeScript
import { SofAddressModule } from '@softheon/forms';
```

#### Properties
| Name | Description | Required | Default |
| :- | :-| :- | :- |
| address: ``Address`` | The address model. | Yes | ``Null`` |
| required: ``boolean`` | Whether the address is required. | No | ``True`` |
| streetRequired: `boolean` | Whether the street address is required. Overrides required property. | No | `Null` |
| zipRequired: `boolean` | Whether the zip code is required. Overrides the required property. | No | `Null` |
| id: ``string ``| ID used to differentiate a component when multiple instances appear on the same page. | No | ``''`` |
| readonly: ``boolean`` | Whether the component should be readonly. | No | ``False`` |
| showStreetName2: ``boolean`` | Whether to show Apt./Ste. input. | No | ``False`` |
| disableState: ``boolean`` | Whether to disable the state. | No | ``False``
| defaultState: ``string`` | The default state. | No | ``Null`` |
| showZipCodeExt: ``boolean`` | Whether to allow zip code to be greater than 5 digits. | No | ``True`` |
| justZip: ``boolean`` | Whether only the zip code field should be shown. | No | ``False`` |
| street1Placeholder: ``string`` | Placeholder text for street 1 | No | ``Street`` |
| street2Placeholder: ``string`` | Placeholder text for street 2 | No | ``Apt./Ste. #`` |
| cityPlaceholder: ``string`` | Placeholder text for city | No | ``City`` |
| zipCodePlaceholder: ``string`` | Placeholder text for city | No | ``Zip Code`` |

### **Additional Classes**

#### Address

#### API reference for Address

```TypeScript
import { Address } from '@softheon/forms';
```

#### Properties

| Name | Description |
| :-- | :-- |
| streeName1: ``string`` | The first line of the street address. |
| streetName2: ``string`` | The second line of the street address. |
| cityName: ``string`` | The name of the city where the address is located. |
| stateCode: ``string`` | The two letter USPS State Code. |
| zipCode: ``string`` | The full five or nine digit zip code |

---

### **Alert Component**

#### `<softheon-form-alert>` is a component used for displaying an alert message to the user

#### API reference for Softheon Form Alert Component

```TypeScript
import { SofAlertModule } from '@softheon/forms';
```

#### Properties
| Name | Description | Required | Default |
| :--- | :---------- | :-- | :-- |
| text: ``string`` | The alert message to display.  | Yes | ``Null`` |
| show: ``boolean`` | Whether the alert message should be shown. | No | ``True`` |
| align: ``string`` | The HTML alignment of the component. Can be left, center, or right. | No | ``center`` |

---

### **Amount Component**

Coming Soon

---

### **Checkbox Validator Component**

Coming Soon

---

### **Currency Component**

#### `<softheon-form-currency>` is a component used for gathering currency amount.

#### API reference for Softheon Currency Component

```TypeScript
import { SofCurrencyModule } from '@softheon/forms';
```
#### Properties
| Name | Description | Required | Default |
| :--- | :---------- | :-- | :-- |
| id: `string `| ID used to differentiate a component when multiple instances appear on the same page. | No | `''` |
| value: `string` | The currency model | Yes | `Null` |
| valueChange: `EventEmitter<string>` | The currency amount output event emitter | No | `EventEmitter<string>` |
| required: `boolean` | Whether the currency component is required. | No | `True` |
| prefix: `string` | What to display before the amount. | No | `'$'` |
| suffix: `string` | What to display after the amount. | No | `''` |
| includeThousandsSeparator: `boolean` | Whether or not to separate thousands. | No | `True` |
| thousandsSeparatorSymbol: `string` | Character with which to separate thousands. | No | `','` |
| allowDecimal: `boolean` | Whether to allow the user to enter a fraction with the amount. | No | `True` |
| decimalSymbol: `string` | Character that will act as a decimal point. | No | `.` |
| decimalLimit: `number` | How many digits to allow after the decimal. | No | `2` |
| integerLimit: `number`| Limit the maximum currency amount. Set to null for no limit. | No | `Null` |
| requireDecimal: `boolean` | Whether to always include a decimal point and placeholder for decimal digits after the integer. | No | `False` |
| allowNegative: `boolean` | Whether to allow negative numbers. | No | `False` |
| allowLeadingZeroes: `boolean` | Whether to allow leading zeroes. | No | `False` |
| placeHolder: `string` | The placeholder text for the input. | No | `Amount` |

---

### **Date Picker Component**

#### `<softheon-form-date-picker>` is a component used for creating an input that allows a user to select a date using a calendar.

#### API reference for Softheon Form Date Picker Component

```TypeScript
import { SofDatePickerModule } from '@softheon/forms';
```

#### Properties
| Name | Description | Required | Default |
| :--- | :---------- | :--- | :--- |
| date: ``Date`` | The Date model.  | Yes | ``Null`` |
| required: ``boolean`` | Whether the date is required. | No | ``True`` |
| id: ``string`` | ID used to differentiate a component when multiple instances appear on the same page. | No | ``''`` |
| placeholder: ``string`` | Placeholder text for the date picker input. | Yes | ``Null`` |
| maxDate: ``Date`` | The maximum date the date picker should allow. | No | ``Null`` |
| minDate: ``Date`` | The minimum date the date picker should allow. | No | ``Null`` |
| startAt: ``Date`` | The date the date picker should start with. | No | ``Null`` |

---

### **Email Component**

Coming Soon

---

### **Name Component**

#### `<softheon-form-name>` is a component used to wrap several Softheon inputs together which allows a user to enter their full name.

#### API reference for Softheon Form Name Component

```TypeScript
import { SofNameModule } from '@softheon/forms';
```

#### Properties
| Name | Description | Required | Default |
| :--- | :---------- | :---- | :---- |
| name: ``Name`` | The Name model.  | Yes | ``Null`` |
| required: ``boolean`` | Whether first and last name should be required. | No | ``True`` |
| id: ``string`` | ID used to differentiate a component when multiple instances appear on the same page. | No | ``''`` |
| showMiddle: ``boolean`` | Whether middle name should be shown. | No | ``True`` |
| showSuffix: ``boolean`` | Whether suffix should be shown. | No | ``True`` |
| suffixOptions: ``Suffix[]`` | Array of suffixes to choose from. | No | ``Suffix`` |

#### **Additional Classes**

#### Name

---

#### Properties

| Name | Description |
| :--- | ----------- |
| firstName: ``string`` | The first name. |
| middleName?: ``string`` | The middle name. |
| lastName: ``string`` | The last name. |
| suffix?: ``Suffix`` | The suffix. |

#### Suffix

---

#### Enumeration of suffixes:

```TypeScript
export enum Suffix {
    Jr = "Jr.",
    Sr = "Sr.",
    Ii = "II",
    Iii = "III",
    Iv = "IV"
  }
```

---

### **Phone Number Component**

#### `<softheon-form-phone-number>` is a component used to collect a user's phone number with options to include phone type, calling code and extension code as well.

#### API reference for Softheon Phone Number Component

```TypeScript
import { SofPhoneNumberModule } from '@softheon/forms';
```

#### Properties
| Name | Description | Required | Default |
| :--- | :---------- | :--- | :--- |
| phoneNumber: ``PhoneNumber`` | The phone number model. | Yes | ``Null`` |
| required: ``boolean`` | Whether the phone number is required. | No | ``True`` |
| id: ``string`` | ID used to differentiate a component when multiple instances appear on the same page. | No | ``''`` |
| showPhoneType: ``boolean`` | Whether to ask for the phone type. | No | ``True`` |
| showCallingCode: ``boolean`` | Whether to ask for the calling code. | No | ``False`` |
| showExtensionCode: ``boolean`` | Whether to show the extension code. | No | ``True`` |
| placeholder: ``string`` | The placeholder text for the input. | No | ``'Phone Number'`` |
| placeholderExt: ``string`` | The placeholder text for the extension code. | No | ``'Extension Code'`` |
| placeholderType: ``string`` | The place older text for the phone type. | No | ``'Phone Type'`` |

#### **Additional Classes**

#### Phone Number

This is the model for the phone number input. It includes the phone type, calling code, phone number and extension code.

#### Properties

| Name | Description |
| :--- | ----------- |
| type: ``PhoneType`` | The type of phone number. Usually can be work, mobile or home. |
| callingCode: ``string`` | The calling code for the phone number. I.e. U.S.A is 1. |
| callingCodeName: ``string`` | The country name for the calling code. |
| number: ``string`` | The phone number. |
| extensionCode: ``string`` | The extension code. |

#### Methods

| Name | Description |
| :--- | ----------- |
| ``getCleanPhoneNumber(): string`` | Removes any paranthesis, hyphens, or spaces from the phone number. I.e. (012) 345-6789 => 0123456789 |
| 

#### Phone Type

Enumeration of phone types:

```TypeScript
export enum PhoneType {
    HOME = 'HOME',
    WORK = 'WORK',
    MOBILE = 'MOBILE'
  }
```
---

#### Properties

### **Relationship Component**

#### `<softheon-form-relationship>` is a component used to collect a user's relationship to the applicant. 

#### API reference for Relationship Component

```TypeScript
import { SofRelationshipModule } from '@softheon/forms';
```

#### **Properties**
| Name | Description | Required | Default |
| :--- | :---------- | :--- | :--- |
| id: `string` | ID used to differentiate a component when multiple instances appear on the same page. | No | `''` |
| relationshipConst: `string` | Relationship category to use. Can be either family, legal or tax. | No | `family` |
| required: `boolean` | Whether relationship input is required. | No | `False` |
| relationshipOptions: `Relationship[]` | Array of available relationship options. | No | `[]` |
| isSpouse: `boolean` | Whether the applicant is a spouse. | No | `False` |
| relationship: `Relationship` | The relationship model. | Yes | `Null` |
| relationshipChange: `EventEmitter<Relationship>` | Event emitter for relationship change event. | No | `EventEmitter<Relationship>` |

#### **Additional Classes**

#### Relationship Enumeration

This is the enumeration of all possible relationship options. Note you can define and pass your relationship options via the relationshipOptions property defined above.

```TypeScript
export enum Relationship {
    SPOUSE = 'Spouse',
    PARENT = 'Parent',
    SON_DAUGHTER = 'Son or Daughter',
    STEPSON_STEPDAUGHTER = 'Stepchild',
    GRANDCHILD = 'Grandchild',
    SIBLING = 'Sibling',
    DOMESTIC_PARTNER = 'Domestic Partner',
    CHILD_OF_DOMESTIC_PARTNER = 'Child of Domestic Partner',
    UNRELATED = 'Unrelated',
    OTHER_RELATIVE = 'Other Relative',
    STEP_PARENT = 'Step Parent',
    AUNT_UNCLE = 'Aunt or Uncle',
    NEPHEW_NIECE = 'Nephew or Niece',
    GRANDPARENT = 'Grandparent',
    FIRST_COUSIN = 'First Cousin',
    PARENTS_DOMESTIC_PARTNER = 'Parent\'s Domestic Partner',
    OTHER = 'Other',
    BROTHER_IN_LAW_SISTER_IN_LAW = 'Sibling in law',
    DAUGHTER_IN_LAW_SON_IN_LAW = 'Son or Daughter in law',
    MOTHER_IN_LAW_FATHER_IN_LAW = 'Parent in law',
    SPONSORED_DEPENDENT = 'Sponsored Dependent',
    DEPENDENT_OF_A_MINOR_DEPENDENT = 'Dependent of Minor Dependent',
    SELF = 'Self',
  
    //legal specific
    FOSTER_CHILD = 'Foster Child',
    COURT_APPOINTED_GUARDIAN = 'Court Appointed Guardian',
    ADOPTED_CHILD = 'Adopted Child',
    FORMER_SPOUSE = 'Former Spouse',
    FOSTER_PARENT = 'formerParent',
    GUARDIAN = 'Guardian',
    ANNUITANT = 'Annuitant',
    TRUSTEE = 'Trustee',
    WARD = 'Ward',
  
    //Tax Specific
    TAX_FILER = 'Tax Filer',
    TAX_DEPENDENT = 'Tax Dependent',
    COLLATERAL_DEPENDENT = 'Collateral Dependent',
  
    // Other
    NONE = 'None of these'
  }
```

#### Family Relationships

Array of all family relationships.

```TypeScript
/** Enumeration for family relationships */
export const FamilyRelationships: Relationship[] = [
  Relationship.SPOUSE,
  Relationship.PARENT,
  Relationship.SON_DAUGHTER,
  Relationship.STEPSON_STEPDAUGHTER,
  Relationship.GRANDCHILD,
  Relationship.SIBLING,
  Relationship.DOMESTIC_PARTNER,
  Relationship.CHILD_OF_DOMESTIC_PARTNER,
  Relationship.UNRELATED,
  Relationship.OTHER_RELATIVE,
  Relationship.STEP_PARENT,
  Relationship.AUNT_UNCLE,
  Relationship.NEPHEW_NIECE,
  Relationship.GRANDPARENT,
  Relationship.FIRST_COUSIN,
  Relationship.PARENTS_DOMESTIC_PARTNER,
  Relationship.OTHER,
  Relationship.BROTHER_IN_LAW_SISTER_IN_LAW,
  Relationship.DAUGHTER_IN_LAW_SON_IN_LAW,
  Relationship.MOTHER_IN_LAW_FATHER_IN_LAW,
  Relationship.SPONSORED_DEPENDENT,
  Relationship.DEPENDENT_OF_A_MINOR_DEPENDENT,
  Relationship.SELF,
];
```

#### Legal Relationships

Array of all legal relationships.

```TypeScript
export const LegalRelationships: Relationship[] = [
  Relationship.ADOPTED_CHILD,
  Relationship.COURT_APPOINTED_GUARDIAN,
  Relationship.FORMER_SPOUSE,
  Relationship.FOSTER_CHILD,
  Relationship.FOSTER_PARENT,
  Relationship.GUARDIAN,
  Relationship.ANNUITANT,
  Relationship.TRUSTEE,
  Relationship.WARD,
  Relationship.OTHER,
];
```

#### Tax Relationships

Array of all tax relationships.

```TypeScript
export const TaxRelationships: Relationship[] = [
  Relationship.TAX_FILER,
  Relationship.TAX_DEPENDENT,
  Relationship.COLLATERAL_DEPENDENT
];
```

#### Relationship Helper

Helper class providing methods for relationship component.

#### **Properties**
| Name | Description | 
| :--- | :---------- | 
| `getCounterRelationship(relationship: Relationship)` | Gets the counter relationship for the given relationship. For example param = parent, return = child. |

---

### **Social Security Number Component**

#### `<softheon-form-ssn>` is a component used to collect a user's social security number. It automatically supports masking the user's social security number as well.

#### API reference for Social Security Number Component

```TypeScript
import { SofSocialSecurityNumberModule } from '@softheon/forms';
```

#### **Properties**
| Name | Description | Required | Default |
| :--- | :---------- | :--- | :--- |
| ssn: ``string`` | The social security number model  | Yes | ``Null`` | 
| required: ``boolean`` | Whether the social security number should be required. | No | ``True`` |
| id: ``string`` | ID used to differentiate a component when multiple instances appear on the same page. | No | ``''`` |
| ssnChange: `EventEmitter<string>` | Social security number change event emitter. | No | `EventEmitter<string>` |

---

### **State Component**

Coming Soon

---

### **Status Frame Component**

#### `<softheon-form-ssn>` is a component used to display a frame around the given HTML content. It displays a green bar in the frame once the content inside the frame is valid.

#### API reference for Status Frame Component

```TypeScript
import { SofStatusFrameModule } from '@softheon/forms';
```

#### **Properties**
| Name | Description | Required | Default |
| :--- | :---------- | :--- | :--- |
| name: ``string`` | The name to be displayed in the status frame title  | No | Empty String | 
| status: ``string`` | Status of the frame | No | complete, progress or edit |
| valid: ``boolean`` | Whether the content in the frame is valid | No | False |
| showHeader: ``boolean`` | Whether to show the header | No | True |
| showStatus: ``boolean`` | Whether to show the status based on form validity | No | True |
| minimizable: ``boolean`` | Whether the status frame component can be minimized/collapsed | No | False |
| isMinimized: ``EventEmitter<boolean>`` | Emits whether the status frame is minimized/collapsed | No | ``EventEmitter<boolean>`` |

---

### **Yes/No Question Component**

#### `<softheon-form-yes-no-question>` is a component used to ask a general yes or no question.

#### API reference for Yes/No Question Component

```TypeScript
import { SofYesNoQuestionModule } from '@softheon/forms';
```

#### **Properties**
| Name | Description | Required | Default |
| :--- | :---------- | :--- | :--- |
| required: `boolean` | Whether the question requires an answer. | No | `True` | 
| id: `string` | ID used to differentiate a component when multiple instances appear on the same page. | No | ``''`` |
| label: `string` | The question to ask. | Yes | `Null` |
| tooltip: `string` | The text to be displayed in the tool-tip. | No | `Null` |
| yesText: `string` | The text to display for the true option. | No | `Yes` |
| noText: `string` | The text to display for the false option. | No | `No` |
| switchOrder: `boolean` | If true, the false option will be shown first. | No | `False` |
| hasUnknown: `boolean` | Whether there should be an unkonwn option. | No | `False` |
| booleanChange: `EventEmitter<boolean>` | The boolean output event. | No | `EventEmitter<boolean>` |
| unknownChange: `EventEmitter<boolean>` | The unkonwn boolean output event. | No | `EventEmitter<boolean>` |
| onChange: `EventEmitter<boolean>` | Event to hook into on change events. | No | `EventEmitter<boolean>` |

---

## **Directives**

You can import all of the directives listed below by importing the SofDirecteModule module or you can import the individual directives that you need.

```TypeScript
import { SofDirectiveModule } from '@softheon/forms';
```

---

### **Letters Only Directive**

#### `[lettersOnly]` is a directive for restricting the input to be letters only.

#### API reference for Number of Digits Directive

```TypeScript
import { LettersOnlyDirective } from '@softheon/forms';
```

#### Example

```HTML
<input id="name" placeholder="Forst Name" [lettersOnly]="true"/>
```
---

### **Number of Digits Directive**

#### `[numberOfDigits]` is a directive for validating the input has the required number of digits.

#### API reference for Number of Digits Directive

```TypeScript
import { NumberOfDigitsDirective } from '@softheon/forms';
```

#### Example

```HTML
<input id="ssn" placeholder="Social Security Number" [numberOfDigits]="9"/>
```
---

### **Number of Digits Range Directive**

#### `[numberOfDigitsRange]` is a directive for validating the input has the required number of digits.

#### API reference for Number of Digits Directive

```TypeScript
import { NumberOfDigitsRangeDirective } from '@softheon/forms';
```

#### Example

```TypeScript
  /** The possible zip code length values */
  public readonly zipCodeLengthRange: number[] = [5, 9];
```

```HTML
<input id="zipCode" placeholder="Zip Code" [numberOfDigitsRange]="zipCodeLengthRange"/>
```
---

### **Numbers Only Directive**

#### `[numbersOnly]` is a directive for allowing only numbers to be entered into an input.

#### API reference for Numbers Only Directive

```TypeScript
import { NumbersOnlyDirective } from '@softheon/forms';
```

#### Example

```HTML
<input id="zipCode" placeholder="Zip Code" [numbersOnly]="true"/>
```

---

### **Provide Parent Form Directive**

#### `[provide-parent-form]` is a directive that allows the parent form to be passed to the child. 

#### API reference for Provide Parent Form Directive

```TypeScript
import { ProvideParentFormDirective } from '@softheon/forms';
```

#### Example

```HTML
<form #theForm="ngForm">
    <div provide-parent-form>        
    </div>
</form>
```