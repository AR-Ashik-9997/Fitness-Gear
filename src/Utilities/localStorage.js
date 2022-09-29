const addToDb = (times) => {
  const breakTime = [times]; 
  localStorage.setItem("times", JSON.stringify(breakTime));
};
const getStoredTime = () => {  
  const storedTime = JSON.parse(localStorage.getItem("times"));
  return storedTime;  
};
export { addToDb, getStoredTime };
