import axios from "axios";

const baseURL = "https://dans-nc-news.herokuapp.com/api/";

export const fetchArticles = topic => {
  return axios
    .get(baseURL + "articles", {
      params: {
        topic: topic
      }
    })
    .then(({ data }) => {
      return data.articles;
    });
};

export const fetchTopics = () => {
  return axios
    .get("https://dans-nc-news.herokuapp.com/api/topics")
    .then(({ data }) => {
      return data.topics;
    });
};

export const fetchArticle = id => {
  return axios.get(baseURL + "articles/" + id).then(({ data }) => data.article);
};
