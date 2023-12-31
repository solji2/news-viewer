import styled from "styled-components";

const NewsItemBlock = styled.div`
  display: flex;
  .thumnail {
    margin-right: 1rem;
    img {
      display: block;
      width: 160;
      height: 100;
      object-fit: cover;
    }
  }
  .contents {
    h2 {
      margin: 0;
      a {
        color: black;
      }
    }
    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
    }
  }
  & + & {
    margin-top: 3rem;
  }
`;

const NewsItem = (article) => {
  console.log("article:", article);
  //title:제목
  //description:내용
  //url:링크
  //urlToImage:뉴스 이미지
  const { title, description, url, urlToImage } = article;

  return (
    <NewsItemBlock>
      {!urlToImage && (
        <div className="thumnail">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={urlToImage} alt="thumnail" />
          </a>
        </div>
      )}
      <div className="contents">
        <h2>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h2>
        <p>{description}</p>
      </div>
    </NewsItemBlock>
  );
};
export default NewsItem;
