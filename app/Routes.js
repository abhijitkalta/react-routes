var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;


//to remove hostroy hash - not recommended for older browsers
var CreateHistory = require('react-router/node_modules/history/lib/createHashHistory.js');
var History = new CreateHistory({
  queryKey: false
});

var Base = require('./components/Base.js');
var Page1 = require('../app/components/Page1.js');
var Page2 = require('../app/components/Page2.js');

var Routes = (
  <Router history={History}>
    <Route path="/" component={Base}>
      <Route path="/page1" component={Page1} />
      <Route path="/page2" component={Page2} />
    </Route>
  </Router>
);

module.exports = Routes;
