const defaultOptions = {
  method: "GET",
  mode: "cors",
  body: null,
  cache: "no-cache",
  credential: "same-origin",
  redirect: "follow",
  referrerPolicy: "no-referrer",
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
  },
};

export const communication = async (options = {}) => {
  const { url, ...restOptions } = {
    ...defaultOptions,
    ...options,
    headers: { ...(defaultOptions.headers ?? {}), ...(options.headers ?? {}) },
  };

  let response = await fetch(url, restOptions);

  if (response.ok) {
    response.data = await response.json();
  }
  return response;
};

communication.get = (url, options) => {
  return communication({
    url,
    ...options,
  });
};

communication.post = (url, body, options) => {
  return communication({
    method: "POST",
    url,
    body: JSON.stringify(body),
    ...options,
  });
};
communication.put = (url, body, options) => {
  return communication({
    method: "PUT",
    url,
    body: JSON.stringify(body),
    ...options,
  });
};
communication.delete = (url, options) => {
  return communication({
    method: "DELETE",
    url,
    ...options,
  });
};
