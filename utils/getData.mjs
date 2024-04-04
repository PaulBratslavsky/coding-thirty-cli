import fetch from "node-fetch";

export async function getData(baseUrl, path, query, token) {

	const url = new URL(path, baseUrl);
	url.search = query;

  console.log(url.href);

  let headers = { "Content-Type": "application/json" };

  if (token) { headers.Authorization = `Bearer ${token}` }

  try {
    const response = await fetch(url.href, {
      method: "GET",
      headers: headers,
    });
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}
