import React from "react";
import TopicCard from "./TopicCard";
import "./Topics.css";

const TopicList = props => {
  return (
    <ul className="topicList">
      {props.topics.map(topic => {
        return <TopicCard key={topic.slug} topic={topic} />;
      })}
    </ul>
  );
};

export default TopicList;
