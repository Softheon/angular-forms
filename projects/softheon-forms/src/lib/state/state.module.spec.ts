import { SofStateModule } from './state.module';

describe('StateModule', () => {
  let stateModule: SofStateModule;

  beforeEach(() => {
    stateModule = new SofStateModule();
  });

  it('should create an instance', () => {
    expect(stateModule).toBeTruthy();
  });
});
