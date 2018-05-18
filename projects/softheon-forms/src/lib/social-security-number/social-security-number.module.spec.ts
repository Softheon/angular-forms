import { SocialSecurityNumberModule } from './social-security-number.module';

describe('SocialSecurityNumberModule', () => {
  let socialSecurityNumberModule: SocialSecurityNumberModule;

  beforeEach(() => {
    socialSecurityNumberModule = new SocialSecurityNumberModule();
  });

  it('should create an instance', () => {
    expect(socialSecurityNumberModule).toBeTruthy();
  });
});
