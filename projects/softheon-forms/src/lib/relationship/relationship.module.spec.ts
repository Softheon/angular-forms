import { SofRelationshipModule } from './relationship.module';

describe('RelationshipModule', () => {
  let relationshipModule: SofRelationshipModule;

  beforeEach(() => {
    relationshipModule = new SofRelationshipModule();
  });

  it('should create an instance', () => {
    expect(relationshipModule).toBeTruthy();
  });
});
