import { AlmundoPage } from './app.po';

describe('almundo App', () => {
  let page: AlmundoPage;

  beforeEach(() => {
    page = new AlmundoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
