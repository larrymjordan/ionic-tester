describe('Account page', function(){
  browser.get('#/tab/dash')

  it("should show the account page when click on account tab", function(){
    // Click on tab account link.
    element.all(by.css('.tab-item')).get(2).click();

    expect(browser.getLocationAbsUrl()).toEqual('http://localhost:8100/#/tab/account')
  })
})