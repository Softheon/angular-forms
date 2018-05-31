import { Relationship } from './relationship.enum';

export class RelationshipHelper{
    /**
     * Gets the counter relationship of the given relationship
     * ex param = parent, return = child
     * @param relation the relation of the person
     */
    public static getCounterRelationship(relation: Relationship): Relationship{
      switch(relation){
        case Relationship.SON_DAUGHTER:{
          return Relationship.PARENT;
        }
  
        case Relationship.PARENT:{
          return Relationship.SON_DAUGHTER;
        }
  
        case Relationship.AUNT_UNCLE:{
          return Relationship.NEPHEW_NIECE;
        }
        
        case Relationship.NEPHEW_NIECE:{
          return Relationship.AUNT_UNCLE;
        }
        
        case Relationship.STEPSON_STEPDAUGHTER: {
          return Relationship.STEP_PARENT;
        }
  
        case Relationship.STEP_PARENT: {
          return Relationship.STEPSON_STEPDAUGHTER;
        }
  
        case Relationship.DAUGHTER_IN_LAW_SON_IN_LAW: {
          return Relationship.MOTHER_IN_LAW_FATHER_IN_LAW;
        }
  
        case Relationship.MOTHER_IN_LAW_FATHER_IN_LAW: {
          return Relationship.DAUGHTER_IN_LAW_SON_IN_LAW;
        }
  
        case Relationship.GRANDCHILD: {
          return Relationship.GRANDPARENT;
        }
  
        case Relationship.GRANDPARENT: {
          return Relationship.GRANDCHILD;
        }
  
        case Relationship.CHILD_OF_DOMESTIC_PARTNER: {
          return Relationship.PARENTS_DOMESTIC_PARTNER;
        }
  
        case Relationship.PARENTS_DOMESTIC_PARTNER: {
          return Relationship.CHILD_OF_DOMESTIC_PARTNER
        }
  
        default: {
          return relation;
        }
      }
    }
  }
  