import { AppPage } from './app.po';
import { browser, by, element, logging,Key } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', async () => {
    await page.navigateTo();
    expect(await page.getTitleText()).toEqual('Contact Manager');
  });
  it('should display error message when User name is not valid',()=>{
    browser.get('login');
     const inputElements = element.all(by.css('input'))
    inputElements.get(0).sendKeys('ad');
    inputElements.get(0).sendKeys(Key.TAB);
    const errorElement = element.all(by.id('errorMessage'))
    expect(errorElement.get(0).getText()).toContain('Username should not be less the 3 chars');
     browser.sleep(1500);
  })

  
  it('should navigate to home page when login succeeds',()=>{
    browser.get('login');
    const inputElements = element.all(by.css('input'))
    inputElements.get(0).sendKeys('admin');
    inputElements.get(1).sendKeys('password')

    const button  = element(by.css('button'));
    button.click();
    expect(browser.getCurrentUrl()).toContain('home')
    browser.sleep(1500);
  })
  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
