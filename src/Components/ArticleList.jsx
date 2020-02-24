import React from "react";
import ArticleCard from "./ArticleCard";

const ArticleList = props => {
  return (
    <ul>
      {props.articles.map(article => {
        return <ArticleCard key={article.article_id} article={article} />;
      })}
    </ul>
  );
};

export default ArticleList;
