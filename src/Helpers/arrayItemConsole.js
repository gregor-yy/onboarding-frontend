const arrayFuel = (value, multiplier, image) => {
  const array = [];
  for (let i = 1; i < 10; i++) {
    array.push({
      key: `${i}item${multiplier}${value}`,
      opacity: i * multiplier <= value,
      image: image,
    });
  }
  return array;
};

export default arrayFuel;
