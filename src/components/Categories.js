import React from "react";
import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

const categories = [
  {
    name: "all",
    text: "전체보기",
  },
  {
    name: "business",
    text: "비즈니스",
  },
  {
    name: "entertainment",
    text: "엔터테인먼트",
  },
  {
    name: "health",
    text: " 건강",
  },
  {
    name: "science",
    text: "과학",
  },
  {
    name: "sports",
    text: "스포츠",
  },
  {
    name: "technology",
    text: "기술",
  },
];

const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem;
  width: "768px";
  margin: 0 auto;
  @media screen {
    width: "100%";
    overflow-x: auto;
  }
`;

const Catagory = styled(NavLink)`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;

  &:hover {
    color: #495057;
  }

  ${(props) =>
    props.active &&
    css`
      font-weight: 600;
      border-bottom: 2px solid #22b8cf;
      color: #22b8cf;
      &:hover {
        color: #bc9dbb;
      }
    `};

  & + & {
    margin-left: 1rem;
  }
`;

const Categories = ({ onSelect, category }) => {
  return (
    <CategoriesBlock>
      {categories.map((c) => (
        <Catagory
          activeClassName="active"
          exact={c.name === "all"}
          to={c.name === "all" ? "/" : "/${c.name}"}
        >
          {c.text}
        </Catagory>
      ))}
    </CategoriesBlock>
  );
};

export default Categories;
