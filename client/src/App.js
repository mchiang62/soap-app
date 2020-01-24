import React, {Component} from "react"
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Products from "./pages/Products";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";


class App extends Component {
  render() {
      return (
      <Router>
       <div>
         {/* <Navbar /> */}
          <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/home" component={Home} />
          <Route path="/about_us" component={About} />
          <Route path="/contact_us" component={Contact} />
          <Route path="/products" component={Products} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          {/* <Route component={NoMatch} /> */}
        </Switch>

       </div>
     </Router>
  );
}
  


export default App;
