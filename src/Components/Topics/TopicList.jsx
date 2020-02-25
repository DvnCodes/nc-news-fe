import React from "react";
import TopicCard from "./TopicCard";

const TopicList = props => {
  return (
    <ul>
      {props.topics.map(topic => {
        return <TopicCard key={topic.slug} topic={topic} />;
      })}
    </ul>
  );
};

export default TopicList;
