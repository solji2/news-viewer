import React from "react";
import Categories from "../components/Categories";
import NewsList from "../components/NewsList";
import { useParams } from "../../node_modules/react-router-dom/dist/index";

const NewsPage = ({ match }) => {
  const params = useParams();
  // 카테고리가 선택되지 않았으면 기본값 all로 사용
  const category = params.category || "all";

  return (
    <div>
      <Categories />
      <NewsList category={category} />
    </div>
  );
};

export default NewsPage;
