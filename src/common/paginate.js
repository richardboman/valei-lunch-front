export const paginate = (array, currentPage, pageSize) => {
  return array.slice(0, currentPage * pageSize);
};
