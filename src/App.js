import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import ContactPage from "./pages/ContactPage";
import Default from "./pages/Default";
import SingleProductPage from "./pages/SingleProductPage";
import CartPage from "./pages/CartPage";

// UI
import Navbar from "./components/UI/Navbar";
import Footer from "./components/UI/Footer";
import SideBar from "./components/UI/SideBar";
import SideCart from "./components/UI/SideCart";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        {/* navbar, sidebar, cart, footers */}
        <Navbar />
        <SideBar />
        <SideCart />
        <Switch>
          <Route path="/products/:id" component={SingleProductPage} />
          <Route path="/products" component={ProductsPage} />
          <Route path="/cart" component={CartPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/not-found" component={Default} />
          <Route path="/" exact component={HomePage} />
          <Redirect to="/not-found" />
        </Switch>
        <Footer />
      </>
    );
  }
}

export default App;
