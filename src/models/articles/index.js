import { API_URL } from "models/constant/api";

export async function getArticles(page = 1, search) {
  const query = { page, limit: 10 };
  if (search) {
    query.search = search;
  }

  return await fetch(
    `${API_URL}/articles?${new URLSearchParams(query).toString()}`
  )
    .then((response) => response.json())
}
