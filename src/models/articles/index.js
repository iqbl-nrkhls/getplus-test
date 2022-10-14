import { API_URL } from "models/constant/api";

export async function getArticles(page = 1, search) {
  const query = { page, limit: 10 };
  if (search) {
    query.search = search;
  }

  return await fetch(
    `${API_URL}/articles?${new URLSearchParams(query).toString()}`
  ).then((response) => response.json());
}

export async function getArticle(id) {
  return await fetch(`${API_URL}/articles/${id}`).then((response) =>
    response.json()
  );
}

export async function getComments(id) {
  return await fetch(`${API_URL}/articles/${id}/comments`).then((response) =>
    response.json()
  );
}

export async function sendComment(id, { user = "Anonymous", comment } = {}) {
  return await fetch(`${API_URL}/articles/${id}/comments`, {
    method: "POST",
    body: JSON.stringify({ user, comment }),
  }).then((response) => response.json());
}

export async function deleteComment(id, commentId) {
  return await fetch(`${API_URL}/articles/${id}/comments/${commentId}`, {
    method: "DELETE",
  }).then((response) => response.json());
}
