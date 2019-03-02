const rand = (min = 1, max = 999999999) => Math.floor(Math.random() * (max - min)) + min;
export default rand;
