const baseUrl = "http://localhost:3005/api/users";

export const getAll = async () => {
  const res = await fetch(`${baseUrl}`);
  const data = await res.json();
  return data.users;
};

export const getOne = async (userId) => {
  const res = await fetch(`${baseUrl}/${userId}`);
  const result = await res.json();
  return result.user;
};

export const create = async (userData) => {
  const { country, city, streetNumber, street, ...data } = userData;

  data.address = {
    country,
    city,
    street,
    streetNumber,
  };

  const res = await fetch(baseUrl, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await res.json();
  return result;
};
