import axios from "axios";

const baseURL = "https://dans-nc-news.herokuapp.com/api/";

export const fetchArticles = (topic, sort) => {
  return axios
    .get(baseURL + "articles", {
      params: {
        topic: topic,
        sort_by: sort
      }
    })
    .then(({ data }) => {
      return data.articles;
    })
    .catch(err => err);
};

export const fetchTopics = () => {
  return axios
    .get("https://dans-nc-news.herokuapp.com/api/topics")
    .then(({ data }) => {
      return data.topics;
    })
    .catch(err => err);
};

export const fetchArticle = id => {
  return axios.get(baseURL + "articles/" + id).then(({ data }) => data.article);
};

export const fetchComments = id => {
  return axios
    .get(baseURL + "articles/" + id + "/comments")
    .then(({ data }) => data.comments);
};

export const patchContentVotes = (id, inc, type) => {
  return axios
    .patch(baseURL + type + "s/" + id, { inc_votes: inc })
    .then(({ data }) => {
      return data[type];
    })
    .catch(err => err);
};

export const postComment = (body, username, article_id) => {
  return axios
    .post(
      `https://dans-nc-news.herokuapp.com/api/articles/${article_id}/comments`,
      { body, username }
    )
    .then(({ data }) => {
      return data;
    })
    .catch(err => err);
};

export const deleteComment = comment_id => {
  return axios
    .delete(`https://dans-nc-news.herokuapp.com/api/comments/${comment_id}`)
    .then(({ data }) => {
      return data;
    })
    .catch(err => err);
};
