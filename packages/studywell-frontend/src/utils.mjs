const generateID = () => {
    const id = Math.floor(100000 + Math.random() * 900000);
    const newID = id.toString();
    return newID;
};
  
export default generateID;