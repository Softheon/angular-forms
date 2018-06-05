import { SofCurrencyModule } from './currency.module';

describe('CurrencyModule', () => {
  let currencyModule: SofCurrencyModule;

  beforeEach(() => {
    currencyModule = new SofCurrencyModule();
  });

  it('should create an instance', () => {
    expect(currencyModule).toBeTruthy();
  });
});
