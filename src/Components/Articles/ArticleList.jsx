import React from "react";
import ArticleCard from "./ArticleCard";
import "./Articles.css";

const ArticleList = props => {
  return (
    <>
      <div className="sortButtons">
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
            props.getArticles(undefined, "created_at");
          }}
        >
          Sort By Newest
        </button>
      </div>
      <ul>
        {props.articles.map(article => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </ul>
    </>
  );
};

export default ArticleList;
