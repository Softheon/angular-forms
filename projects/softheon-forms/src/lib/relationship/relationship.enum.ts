/**
 * Relationship enumeration
 */
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