import { ShoppyPage } from './app.po';

describe('shoppy App', () => {
  let page: ShoppyPage;

  beforeEach(() => {
    page = new ShoppyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
