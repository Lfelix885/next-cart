const URL = "http://localhost:3333/data";

export async function getData() {
  const response = await fetch(URL);
  const data = await response.json();
  return data;
}

export async function sendData(body: any) {
  const response = await fetch(URL, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const data = await response.json();
  return data;
}

export async function editData() {
  const response = await fetch(URL);
  const data = await response.json();
  return data;
}
