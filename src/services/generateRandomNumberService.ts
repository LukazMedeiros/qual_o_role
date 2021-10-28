const randomNumber = (maximum: number) => {
  const min = 1;
  const max = Math.floor(maximum);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export { randomNumber };
