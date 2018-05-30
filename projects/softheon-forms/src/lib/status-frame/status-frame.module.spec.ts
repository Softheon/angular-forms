import { SofStatusFrameModule } from './status-frame.module';

describe('StatusFrameModule', () => {
  let statusFrameModule: SofStatusFrameModule;

  beforeEach(() => {
    statusFrameModule = new SofStatusFrameModule();
  });

  it('should create an instance', () => {
    expect(statusFrameModule).toBeTruthy();
  });
});
