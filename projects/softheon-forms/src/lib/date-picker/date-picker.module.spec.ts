import { SofDatePickerModule } from './date-picker.module';

describe('DatePickerModule', () => {
  let datePickerModule: SofDatePickerModule;

  beforeEach(() => {
    datePickerModule = new SofDatePickerModule();
  });

  it('should create an instance', () => {
    expect(datePickerModule).toBeTruthy();
  });
});
