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
import Weather from "./components/Weather";
import UserStatus from "./components/UserStatus";
import { IoIosCart } from "react-icons/io";
import { MdComputer } from "react-icons/md";
import { IoCarSportOutline } from "react-icons/io5";
import StylesCard from "./components/StylesCard";
import ProfileCard from "./components/ProfileCard";
import IconComponent from "./components/IconComponent";

function App() {
  return (
    <div>
      <IoIosCart />
      <MdComputer />
      <IoCarSportOutline />
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
      <Weather />
      <UserStatus loggedIn={true} isAdmin={false} />
      <StylesCard />
      <ProfileCard />
      <IconComponent />
    </div>
  );
}

export default App;
