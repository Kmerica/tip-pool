// GOAL IS TO THOROUGHLY TEST EACH FUNCTION IN THE APP
// STEP 1: READ CODE BASE, CLEAN UP THE DOM AFTER THE TEST IS RUN USING 'AFTEREACH', & WRITE A TEST FOR EACH FUNCTION FOUND IN SERVER.JS
// STEP 2: CREATE HELPERS.TEST.JS AND TEST EACH FUNCTION IN HELPERS.JS & CREATE PAYMENTS.TEST.JS AND TEST EACH FUNCTION IN PAYMENTS.JS
// STEP 3: TEST OWN CODE -- REVIEW FUNCTIONALITY OF appendTd(tr, value) -- CREATE A appendDeleteBtn(tr), WILL BE SIMILAR TO append(tr, value) 
// WILL CREATE A 'TD' WITH THE VALUE X WHEN CLICKED IT WILL DELETE THE TABLE ROW IT BELONGS TO. --
// -- WRITE THE FUNCTIONALITY FOR APPENDING A 'TD' TO A 'TR' WITH THE VALUE X -- SET AN EVENT LISTENER ON THE 'TD' THAT WILL REMOVE THE PARENT
// 'TR' FROM THE DOM. YOU WILL HAVE TO FIND A WAY TO ACCESS THE PARENT ROW OF THE 'TD' FROM THE CLICK EVENT --
// WRITE TESTS FOR appendDeleteBtn(tr) -- DONT SPEND TIME TESTING HTML AFTER DOM IS UPDATED DIFFICULTY SIMULATING A CLICK WITH VANILLA JS --
// REPEAT THE PROCESS FOR REMOVING A PAYMENT FROM THE PAYMENT TABLE


describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  afterEach(function() {
    // teardown logic
  });
});
