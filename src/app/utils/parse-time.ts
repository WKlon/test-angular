function getCurrentTime(): string {
  const date = new Date();
  const offset = 180;
  date.setMinutes(offset + date.getTimezoneOffset() + date.getMinutes());
  return date.toString().substring(16, 21);
}
export default getCurrentTime;
