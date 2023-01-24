import axios from "axios";
const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}/tomatoes`;

async function create(token, data) {
  const request = axios.post(baseUrl, JSON.stringify(data), {
    headers: { authorization: "bearer " + token },
  });

  return request.then((response) => response.data);
}

// const update = (id, newObject) => {
//   const request = axios.put(`${baseUrl}/${id}`, newObject);
//   return request.then((response) => response.data);
// };

export default { create };
