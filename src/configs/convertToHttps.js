const convertToHttps = (url) => {
  // If URL starts with "http://" or "https://", return it as is
  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }

  // If URL doesn't have "www." or "https://", assume it's a bare domain and prepend "https://www."
  return `https://${url}`;
};

export default convertToHttps;
