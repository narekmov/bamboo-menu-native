export const API = 'https://testapimenu.owlfinity.am';
export const _API = 'http://192.168.1.3:3300';

export const loginRequest = async () => {
  const response = await fetch(`${API}/login`, {
    method: 'POST',
    body: JSON.stringify({
      username: 'admin',
      password: '1111',
    }),
    headers: {
      "Content-Type": "application/json",
    }
  });
  const responseJson = await response.json();
  return responseJson;
};

export const getSlides = async (token) => {
  const response = await fetch(`${API}/slides`, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": token,
    },
  });
  const responseJson = await response.json();

  return responseJson;
};

export const getProducts = async (token, sid = -1, cid = -1) => {
  const query = [];
  if (sid !== -1) {
    // query.push(`section_id=${encodeURI(sid)}`);
    if (cid !== -1) {
      query.push(`category_id=${encodeURI(cid)}`);
    }
  }

  const url = `${API}/products` + (!query.length ? '' : ('?' + query.join('&')));

  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token,
    },
  });
  const responseJson = await response.json();

  return responseJson;
};

export const getCategories = async (token, sid = -1) => {
  const query = [];
  if (sid !== -1) {
    query.push(`section_id=${encodeURI(sid)}`);
  }

  const url = `${API}/categories` + (!query.length ? '' : ('?' + query.join('&')));

  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token,
    },
  });
  const responseJson = await response.json();
  
  return responseJson;
};

export const getSections = async (token) => {
  const response = await fetch(`${API}/sections`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token,
    },
  });
  const responseJson = await response.json();

  return responseJson;
};
