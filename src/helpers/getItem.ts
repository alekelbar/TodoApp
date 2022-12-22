export const getItem = () => {
  const data = localStorage.getItem("todos");
  if (!data) return null;
  const result = JSON.parse(data);
  const result2 = JSON.parse(result);
  return result2; // Why?
};
