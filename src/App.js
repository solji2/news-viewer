import logo from "./logo.svg";
import "./App.css";
import { useCallback, useState } from "react";
import axios from "axios";
import NewsItem from "./components/NewsItem";
import NewsList from "./components/NewsList";
import Categories from "./components/Categories";

const App = () => {
  const [category, setCategory] = useState("all");
  const onSelect = useCallback((category) => {
    setCategory(category);
  }, []);
  return (
    <>
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />;
    </>
  );
};

export default App;
