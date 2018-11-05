import { PrivateSideModule } from './private-side.module'

describe('PrivateSideModule', () => {
  let privateSideModule: PrivateSideModule;

  beforeEach(() => {
    privateSideModule = new PrivateSideModule();
  });

  it('should create an instance', () => {
    expect(privateSideModule).toBeTruthy();
  });
});
