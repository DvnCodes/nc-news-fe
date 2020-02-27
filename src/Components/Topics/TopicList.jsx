import TopicCard from "./TopicCard";
import "./Topics.css";

import React from "react";

const TopicList = props => {
  return (
    <div>
      <ul className="topicList">
        {props.topics.map(topic => {
          return <TopicCard key={topic.slug} topic={topic} />;
        })}
      </ul>
    </div>
  );
};

export default TopicList;
