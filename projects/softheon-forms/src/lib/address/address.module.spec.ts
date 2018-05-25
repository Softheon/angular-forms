import { SofAddressModule } from './address.module';

describe('AddressModule', () => {
  let addressModule: SofAddressModule;

  beforeEach(() => {
    addressModule = new SofAddressModule();
  });

  it('should create an instance', () => {
    expect(addressModule).toBeTruthy();
  });
});
