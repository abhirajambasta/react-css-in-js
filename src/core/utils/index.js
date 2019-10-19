export const composeDate = timeStamp => {
  const date = timeStamp ? new Date(timeStamp) : new Date();
  return {
    formattedDate: `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`,
    date
  };
};

export const getDatesDiff = date => `${Math.floor(
  Math.abs(new Date(Date.now()).getTime() - new Date(date).getTime()) /
    (1000 * 3600 * 24)
)}`;
