import React from "react";
import ArticleCard from "./ArticleCard";
import "./Articles.css";
import { Router } from "@reach/router";

const ArticleList = props => {
  return (
    <>
      <div path="/articles/*" className="sortButtons">
        <button
          onClick={() => {
            props.getArticles(undefined, "votes");
          }}
        >
          Votes
        </button>
        <button
          onClick={() => {
            props.getArticles(undefined, "comment_count");
          }}
        >
          Most Comments
        </button>
        <button
          onClick={() => {
            props.getArticles(undefined, "created_at");
          }}
        >
          Newest
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
