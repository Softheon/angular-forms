import { SofSocialSecurityNumberModule } from './social-security-number.module';

describe('SocialSecurityNumberModule', () => {
  let socialSecurityNumberModule: SofSocialSecurityNumberModule;

  beforeEach(() => {
    socialSecurityNumberModule = new SofSocialSecurityNumberModule();
  });

  it('should create an instance', () => {
    expect(socialSecurityNumberModule).toBeTruthy();
  });
});
