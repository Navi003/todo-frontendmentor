export async function sendRequest(data, url, token = "") {
  data;
  const res = await fetch(url, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },

    body: JSON.stringify(data),
  });

  return res;
}
