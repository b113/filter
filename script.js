const filterByExpiration = (items) => {

  const todaysDate = new Date();
  const year = todaysDate.getFullYear();
  const month = todaysDate.getMonth();
  const day = todaysDate.getDate();

  return items.reduce((acc, val) => {

    if (Number(val.expirationDate.substr(6, 4)) >= year &&
      Number(val.expirationDate.substr(0, 2)) > month + 1) {
      acc.push(val)
    } else if (Number(val.expirationDate.substr(0, 2)) === month + 1 &&
      Number(val.expirationDate.substr(3, 2)) > day) {
      acc.push(val)
    }
    return acc;
  }, []);
};