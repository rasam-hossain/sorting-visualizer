export const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

export const clearTimeOut = (timer) => {
  clearTimeOut(timer);
};
