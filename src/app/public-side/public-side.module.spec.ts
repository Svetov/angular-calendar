import { PublicSideModule } from './public-side.module';

describe('PublicSideModule', () => {
  let publicSideModule: PublicSideModule;

  beforeEach(() => {
    publicSideModule = new PublicSideModule();
  });

  it('should create an instance', () => {
    expect(publicSideModule).toBeTruthy();
  });
});
