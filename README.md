# Softheon Forms

Softheon Forms provides Angular developers pre defined form components so developers can quickly create forms in their web applications. 
---
## **Quick Links**

* [Getting Started](#getting-started)
* [Components](#components)
    * [Name Component](#name-component)
    * [Address Component](#adress-component)
* [NPM Repository](https://www.npmjs.com/package/@softheon/forms)
---
## **Getting Started**

### **Step 1: Install Softheon Forms**

#### First you need to log into Softheon's NPM repository.

```shell
npm login
```

#### Next you need to install the package.

```shell
npm install --save @softheon/forms@latest
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

### **Name Component**

#### `<softheon-form-name>` is a component used to wrap several Softheon inputs together which allows a user to enter their full name.

#### API reference for Softheon Form Name component

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

### **Address Component**

Coming Soon






