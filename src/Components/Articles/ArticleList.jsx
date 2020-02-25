import React from "react";
import ArticleCard from "./ArticleCard";
import "./Articles.css";

const ArticleList = props => {
  return (
    <>
      <button
        onClick={() => {
          props.getArticles(undefined, "votes");
        }}
      >
        Sort By Votes
      </button>
      <button
        onClick={() => {
          props.getArticles(undefined, "comment_count");
        }}
      >
        Sort By Most Comments
      </button>
      <button
        onClick={() => {
          props.getArticles(undefined, "date_created");
        }}
      >
        Sort By Newest
      </button>
      <ul>
        {props.articles.map(article => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </ul>
    </>
  );
};

export default ArticleList;
