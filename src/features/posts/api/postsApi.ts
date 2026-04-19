export const fetchPosts = async () => {
  const res = await fetch("https://k8s.mectest.ru/test-app/openapi.json");
  return res.json();
};
