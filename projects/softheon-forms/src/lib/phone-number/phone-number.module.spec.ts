import { SofPhoneNumberModule } from './phone-number.module';

describe('PhoneNumberModule', () => {
  let phoneNumberModule: SofPhoneNumberModule;

  beforeEach(() => {
    phoneNumberModule = new SofPhoneNumberModule();
  });

  it('should create an instance', () => {
    expect(phoneNumberModule).toBeTruthy();
  });
});
