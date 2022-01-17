export const getCookie = name => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
};

export const setCookie = (name, value) => {
  document.cookie = `${name}=${value || ''}; max-age=${value ? 86400 : 0}; path=/`;
};