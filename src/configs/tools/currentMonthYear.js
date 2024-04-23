const currentMonthYear = () => {
  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().slice(0, 7);
  return formattedDate;
};

export default currentMonthYear;
