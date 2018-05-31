import { Relationship } from './relationship.enum';

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