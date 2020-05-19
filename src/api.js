import axios from "axios";

const baseURL = "https://dans-nc-news.herokuapp.com/api/";
// MUST CHANGE THIS BEFORE PUSHING TO MASTER
// const baseURL = "http://localhost:9090/api/";

export const fetchUsers = () => {
  return axios
    .get(baseURL + "users")
    .then(({ data }) => {
      return data.users;
    })
    .catch((err) => err);
};

export const fetchArticles = (topic, sort, limit, p) => {
  return axios
    .get(baseURL + "articles", {
      params: {
        topic: topic,
        sort_by: sort,
        limit: limit,
        p: p,
      },
    })
    .then(({ data }) => {
      return data.articles;
    });
};

export const fetchTopics = () => {
  return axios
    .get(baseURL + "topics")
    .then(({ data }) => {
      return data.topics;
    })
    .catch((err) => err);
};

export const fetchArticle = (id) => {
  return axios.get(baseURL + "articles/" + id).then(({ data }) => data.article);
};

export const fetchComments = (id, limit) => {
  return axios
    .get(baseURL + "articles/" + id + "/comments", {
      params: {
        limit: limit,
      },
    })
    .then(({ data }) => data.comments);
};

export const patchContentVotes = (id, inc, type) => {
  return axios
    .patch(baseURL + type + "s/" + id, { inc_votes: inc })
    .then(({ data }) => {
      return data[type];
    })
    .catch((err) => err);
};

export const postComment = (body, username, article_id) => {
  return axios
    .post(`${baseURL}articles/${article_id}/comments`, { body, username })
    .then(({ data }) => {
      return data;
    })
    .catch((err) => err);
};

export const deleteComment = (comment_id) => {
  return axios
    .delete(`${baseURL}comments/${comment_id}`)
    .then(({ data }) => {
      return data;
    })
    .catch((err) => err);
};

export const postArticle = (article) => {
  return axios
    .post(baseURL + "articles", article)
    .then(({ data }) => {
      return data.article;
    })
    .catch((err) => err);
};

export const deleteArticle = (article_id) => {
  return axios
    .delete(`${baseURL}articles/${article_id}`)
    .then(({ data }) => {
      return data;
    })
    .catch((err) => err);
};
