import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Products from "./pages/Products";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
// import NavBar from "./Components/Navbar/Navbar";

function App() {
      return (
      <Router>
       <div>
         {/* <Navbar /> */}
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/cart" component={Cart} />
          <Route path="/contact" component={Contact} />
          <Route exact path ="/products" component={Products} />
       </div>
     </Router>
  );
}
  


export default App;
