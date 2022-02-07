export default function isToday(date?: any) {
  if (date) {
    const suppliedDate = new Date(date);
    if (suppliedDate.getFullYear() !== new Date().getFullYear()) return false;
    if (suppliedDate.getMonth() !== new Date().getMonth()) return false;
    if (suppliedDate.getDate() !== new Date().getDate()) return false;
    return true;
  }
  return false;
}
