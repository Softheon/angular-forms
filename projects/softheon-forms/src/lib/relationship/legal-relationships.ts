import { Relationship } from './relationship.enum';

/**Enumeration for legal relationships */
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