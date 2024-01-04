import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import axios from "axios";
import NewsItem from "./components/NewsItem";
import NewsList from "./components/NewsList";
import Categories from "./components/Categories";

const App = () => {
  return (
    <>
      <Categories />
      <NewsList />;
    </>
  );
};

export default App;
