import React from "react";
import Greet from "./components/Greet";
import Add from "./components/Add";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import WelcomeMessage from "./components/WelcomeMessage";
import JSXRules from "./components/JSXRules";
import Greeting from "./components/Greeting";
import ProductInfo from "./components/ProductInfo";
import Mapping from "./components/Mapping";
import UserList from "./components/UserList";
import ProductList from "./components/ProductList";
import Person from "./Person";
import Product from "./components/Product";

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <WelcomeMessage />
      <JSXRules />
      <Footer />

      <Greeting />
      <ProductInfo />
      <Mapping />
      <UserList />
      <ProductList />
      <Person name="John" age={25} />
      <Product name="smart watch" price="ksh 3000" />
    </div>
  );
}

export default App;
