import { SofYesNoQuestionModule } from './yes-no-question.module';

describe('YesNoQuestionModule', () => {
  let yesNoQuestionModule: SofYesNoQuestionModule;

  beforeEach(() => {
    yesNoQuestionModule = new SofYesNoQuestionModule();
  });

  it('should create an instance', () => {
    expect(yesNoQuestionModule).toBeTruthy();
  });
});
