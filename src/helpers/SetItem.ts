export const setItem = (data: string) => {
  const result = JSON.stringify(data);
  localStorage.setItem("todos", result);
};
