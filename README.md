# Softheon Forms

Softheon Forms provides Angular developers pre defined form components so developers can quickly create forms in their web applications. 
---
## **Quick Links**

* [Getting Started](#getting-started)
* [Components](#components)
    * [Address](#adress-component)
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
    * [Number of Digits](#number-of-digits-directive)
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
import { SofNameModule, SofAddressModule } from '@softheon/softheon-forms';
@NgModule({
    ...
    imports: [SofNameModule, SofAddressModule]
    ...
})
export class MyAppModule { }
```

#### Alternatively, you can create a separate NgModule that imports all of the Angular Material components that you will use in your application. Then you can include this module wherever you'd like to use the components.

```TypeScript
import { SofNameModule, SofAddressModule } from '@softheon/softheon-forms';
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

Coming Soon

---

### **Alert Component**

#### `<softheon-form-alert>` is a component used for displaying an alert message to the user

#### API reference for Softheon Form Alert Component

```TypeScript
import { SofAlertModule } from '@softheon/softheon-forms';
```

#### **Properties**
| Name | Description |
| :--- | :---------- |
| text: string | The alert message to display  |
| show: boolean | Whether the alert message should be shown. Default is true |
| align: string | The HTML alignment of the component. Can be left, center, or right. Default is center |

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
import { SofDatePickerModule } from '@softheon/softheon-forms';
```

#### **Properties**
| Name | Description |
| :--- | :---------- |
| date: Date | The Date model  |
| required: boolean | Whether the date is required. Default to true |
| id: string | ID used to differentiate a component when multiple instances appear on the same page |
| placeholder: string | Placeholder text for the date picker input |
| maxDate: Date | The maximum date the date picker should allow. Default is null |
| minDate: Date | The minimum date the date picker should allow. Default is null |
| startAt: Date | The date the date picker should start with |

---

### **Email Component**

Coming Soon

---

### **Name Component**

#### `<softheon-form-name>` is a component used to wrap several Softheon inputs together which allows a user to enter their full name.

#### API reference for Softheon Form Name Component

```TypeScript
import { SofNameModule } from '@softheon/softheon-forms';
```

#### **Properties**
| Name | Description |
| :--- | :---------- |
| name: Name | The name model  |
| required: boolean | Whether first and last name should be required. Default to true |
| showMiddle: boolean | Whether middle name should be shown. Default is true |
| showSuffix: boolean | Whether suffix should be shown. Default is true. |
| suffixOptions: Suffix[] | Array of suffixes to choose from. Defaults to Jr, Sr, III and IV |
| id: string | ID used to differentiate a component when multiple instances appear on the same page |

#### **Additional Classes**

#### **Name**

---

#### Properties

| Name | Description |
| :--- | ----------- |
| firstName: string | The first name |
| middleName?: string | The middle name |
| lastName: string | The last name |
| suffix?: Suffix | The suffix |

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
import { SofSocialSecurityNumberModule } from '@softheon/softheon-forms';
```

#### **Properties**
| Name | Description |
| :--- | :---------- |
| ssn: string | The social security number model  |
| required: boolean | Whether the social security number should be required. Default to true |
| id: string | ID used to differentiate a component when multiple instances appear on the same page |
| ssnChange: EventEmitter<string> | Social security number change event emitter |

---

### **State Component**

Coming Soon

---

### **Status Frame Component**

Coming Soon

## **Directives**

### **Number of Digits Directive**

#### `[numberOfDigits]` is a directive for validating the input has the required number of digits.

#### API reference for Number of Digits Directive

```TypeScript
import { SofDirectiveModule } from '@softheon/softheon-forms';
```

#### Example

```HTML
<input id="ssn" placeholder="Social Security Number" [numberOfDigits]="9"/>
```

---

### **Provide Parent Form Directive**

#### `[provide-parent-form]` is a directive that allows the parent form to be passed to the child. 

#### API reference for Provide Parent Form Directive

```TypeScript
import { SofDirectiveModule } from '@softheon/softheon-forms';
```

#### Example

```HTML
<form #theForm="ngForm">
    <div provide-parent-form>        
    </div>
</form>
```