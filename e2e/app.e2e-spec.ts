import { AngularTakPage } from './app.po';

describe('angular-tak App', () => {
  let page: AngularTakPage;

  beforeEach(() => {
    page = new AngularTakPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
