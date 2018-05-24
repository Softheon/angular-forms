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
* [Directives](#directives)
    * [Letters Only](#letters-only-directive)
    * [Number of Digits](#number-of-digits-directive)
    * [Number of Digits Range](#number-of-digits-range-directive)
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

#### **Properties**
| Name | Description | Required | Default |
| :- | :-| :- | :- |
| address: Address | The address model. | Yes | Null |
| required: boolean | Whether the address is required. | No | True |
| id: string | ID used to differentiate a component when multiple instances appear on the same page. | No |Empty String |
| readonly: boolean | Whether the component should be readonly. | No | False |
| showStreetName2: boolean | Whether to show Apt./Ste. input. | No | False |
| disableState: boolean | Whether to disable the state. | No | False
| defaultState: string | The default state. | No | Null |
| showZipCodeExt: boolean | Whether to allow zip code to be greater than 5 digits. | No | True |
| justZip: boolean | Whether only the zip code field should be shown. | No | False |

### **Additional Classes**

#### **Address**

#### API reference for Address

```TypeScript
import { Address } from '@softheon/forms';
```

#### Properties

| Name | Description |
| :-- | :-- |
| streeName1: string | The first line of the street address. |
| streetName2: string | The second line of the street address. |
| cityName: string | The name of the city where the address is located. |
| stateCode: string | The two letter USPS State Code. |
| zipCode: string | The full five or nine digit zip code |

---

### **Alert Component**

#### `<softheon-form-alert>` is a component used for displaying an alert message to the user

#### API reference for Softheon Form Alert Component

```TypeScript
import { SofAlertModule } from '@softheon/forms';
```

#### **Properties**
| Name | Description | Required | Default |
| :--- | :---------- | :-- | :-- |
| text: string | The alert message to display.  | Yes | Null |
| show: boolean | Whether the alert message should be shown. | No | True |
| align: string | The HTML alignment of the component. Can be left, center, or right. | No | center |

---

### **Amount Component**

Coming Soon

---

### **Checkbox Validator Component**

Coming Soon

---

### **Currency Component**

Coming Soon

---

### **Date Picker Component**

#### `<softheon-form-date-picker>` is a component used for creating an input that allows a user to select a date using a calendar.

#### API reference for Softheon Form Date Picker Component

```TypeScript
import { SofDatePickerModule } from '@softheon/forms';
```

#### **Properties**
| Name | Description | Required | Default |
| :--- | :---------- | :--- | :--- |
| date: Date | The Date model.  | Yes | Null |
| required: boolean | Whether the date is required. | No | True |
| id: string | ID used to differentiate a component when multiple instances appear on the same page. | No | Empty String |
| placeholder: string | Placeholder text for the date picker input. | Yes | Null |
| maxDate: Date | The maximum date the date picker should allow. | No | Null |
| minDate: Date | The minimum date the date picker should allow. | No | Null |
| startAt: Date | The date the date picker should start with. | No | Null |

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

#### **Properties**
| Name | Description | Required | Default |
| :--- | :---------- | :---- | :---- |
| name: Name | The Name model.  | Yes | Null |
| required: boolean | Whether first and last name should be required. | No | True |
| showMiddle: boolean | Whether middle name should be shown. | No | True |
| showSuffix: boolean | Whether suffix should be shown. | No | True |
| suffixOptions: Suffix[] | Array of suffixes to choose from. | No | Jr., Sr., III, IV |
| id: string | ID used to differentiate a component when multiple instances appear on the same page. | No | Empty String |

#### **Additional Classes**

#### **Name**

---

#### Properties

| Name | Description |
| :--- | ----------- |
| firstName: string | The first name. |
| middleName?: string | The middle name. |
| lastName: string | The last name. |
| suffix?: Suffix | The suffix. |

#### **Suffix**

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

Coming Soon

---

### **Relationship Component**

Coming Soon

---

### **Social Security Number Component**

#### `<softheon-form-ssn>` is a component used to collect a user's social security number. It automatically supports masking the user's social security number as well.

#### API reference for Softheon Social Security Number Component

```TypeScript
import { SofSocialSecurityNumberModule } from '@softheon/forms';
```

#### **Properties**
| Name | Description | Required | Default |
| :--- | :---------- | :--- | :--- |
| ssn: string | The social security number model  | Yes | Null | 
| required: boolean | Whether the social security number should be required. | No | True |
| id: string | ID used to differentiate a component when multiple instances appear on the same page. | No | Empty String |
| ssnChange: EventEmitter`<string>` | Social security number change event emitter. | No | EventEmitter`<string>` |

---

### **State Component**

Coming Soon

---

### **Status Frame Component**

Coming Soon

## **Directives**

You can import all of the directives listed below by importing the SofDirecteModule module or you can import the individual directives that you need.

```TypeScript
import { SofDirectiveModule } from '@softheon/forms';
```

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