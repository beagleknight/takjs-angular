import { TakJSAngularPage } from './app.po';

describe('takjs-angular App', () => {
  let page: TakJSAngularPage;

  beforeEach(() => {
    page = new TakJSAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
