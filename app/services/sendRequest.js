export async function sendRequest(data) {
  console.log(data);
  const res = await fetch("/api/user/sign-up", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res;
}
