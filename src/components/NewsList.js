import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import styled from "styled-components";
import axios from "../../node_modules/axios/index";

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and(max-width:768) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;
const sampleArticle = {
  title: "제목",
  description: "내용",
  url: "https://google.com",
  urlToImage: "https://via.placeholder.com/160",
};

const NewsList = () => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false); //API 요청이 대기중인지 판별

  useEffect(() => {
    //async를 사용하는 함수 따로 선언 -> useEffect 내부에서 async.await를 바로사용할 순 없고, 함수 내부에 async가 붙은 또 다른 함수를 만들어서 사용해야함
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/top-headlines?country=kr&apiKey=f0de6d8818fe46368c3251612dc3b779"
        );
        //console.log(response);
        setArticles(response.data.articles);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <NewsListBlock>대기 중,,</NewsListBlock>;
  }

  //articles 값이 설정되지 않았을 때

  if (!articles) {
    console.log("존재하지않는다고");
    return null;
  }

  //console.log("articles===>", articles);
  return (
    // <NewsListBlock>
    //   {articles.map((article) => {
    //     console.log("article1111:", article);
    //     <NewsItem key={article.url} article={article}></NewsItem>;
    //   })}
    // </NewsListBlock>

    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;
