export function formatDate(dateString) {

  const day = String(dateString.getDate()).padStart(2, "0");
  const month = String(dateString.getMonth() + 1).padStart(2, "0");
  const year = dateString.getFullYear();

  return `${day}/${month}/${year}`;
}
