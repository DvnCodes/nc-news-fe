import React from "react";
import ArticleCard from "./ArticleCard";
import "./Articles.css";
import { Router } from "@reach/router";

const ArticleList = props => {
  return (
    <>
      {props.getArticles ? (
        <div path="/articles/*" className="sortButtons">
          <button
            onClick={() => {
              props.getArticles(props.topic, "votes");
              props.changePage("reset");
            }}
          >
            Votes
          </button>
          <button
            onClick={() => {
              props.getArticles(props.topic, "comment_count");
              props.changePage("reset");
            }}
          >
            Most Comments
          </button>
          <button
            onClick={() => {
              props.getArticles(props.topic, "created_at");
              props.changePage("reset");
            }}
          >
            Newest
          </button>
        </div>
      ) : null}
      <ul className="topicsArticleList">
        {props.articles.map(article => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </ul>
    </>
  );
};

export default ArticleList;
