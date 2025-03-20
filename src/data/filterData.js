import TYPES from './types.js';

const filterOptions = [
  { id: TYPES.ALL, name: 'Tous', icon: new URL('../assets/images/icons/all.png', import.meta.url).href, isActive: true },
  { id: TYPES.BURGER, name: 'Burgers', icon: new URL('../assets/images/icons/burger.png', import.meta.url).href, isActive: false },
  { id: TYPES.PIZZA, name: 'Pizzas', icon: new URL('../assets/images/icons/pizza.png', import.meta.url).href, isActive: false },
  { id: TYPES.BOISSONS, name: 'Boissons', icon: new URL('../assets/images/icons/boisson.png', import.meta.url).href, isActive: false },
  { id: TYPES.SUSHI, name: 'Sushi', icon: new URL('../assets/images/icons/sushi.png', import.meta.url).href, isActive: false },
  { id: TYPES.BOL, name: 'Bols', icon: new URL('../assets/images/icons/bol.png', import.meta.url).href, isActive: false }
];

export default filterOptions;
