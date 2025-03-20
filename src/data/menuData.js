import TYPES from './types.js';

const menuData = [
    // 🍔 Burgers
    { id: 1, type: TYPES.BURGER, name: 'Classic Burger', topSale: true, rate: 4.5, price: 8, stock: 15, extra: 200, image: new URL('../assets/images/plats/burgers/classic_burger.jpg', import.meta.url).href },
    { id: 2, type: TYPES.BURGER, name: 'Cheese Burger', topSale: false, rate: 4.2, price: 9, stock: 10, extra: 180, image: new URL('../assets/images/plats/burgers/cheese_burger.jpg', import.meta.url).href },
    { id: 3, type: TYPES.BURGER, name: 'Bacon Burger', topSale: true, rate: 4.8, price: 10, stock: 8, extra: 220, image: new URL('../assets/images/plats/burgers/bacon_burger.jpg', import.meta.url).href },
    { id: 4, type: TYPES.BURGER, name: 'Chicken Burger', topSale: false, rate: 4.0, price: 9, stock: 12, extra: 190, image: new URL('../assets/images/plats/burgers/chicken_burger.jpg', import.meta.url).href },
    { id: 5, type: TYPES.BURGER, name: 'Vegan Burger', topSale: false, rate: 4.3, price: 9, stock: 6, extra: 170, image: new URL('../assets/images/plats/burgers/vegan_burger.jpg', import.meta.url).href },

    // 🍕 Pizzas
    { id: 6, type: TYPES.PIZZA, name: 'Margherita', topSale: true, rate: 4.7, price: 11, stock: 20, extra: 250, image: new URL('../assets/images/plats/pizza/margherita.jpg', import.meta.url).href },
    { id: 7, type: TYPES.PIZZA, name: 'Pepperoni', topSale: true, rate: 4.8, price: 12, stock: 18, extra: 270, image: new URL('../assets/images/plats/pizza/peperonni.jpg', import.meta.url).href },
    { id: 8, type: TYPES.PIZZA, name: 'BBQ Chicken', topSale: false, rate: 4.5, price: 13, stock: 10, extra: 260, image: new URL('../assets/images/plats/pizza/bbq_chicken.jpg', import.meta.url).href },
    { id: 9, type: TYPES.PIZZA, name: 'Four Cheese', topSale: false, rate: 4.3, price: 12, stock: 15, extra: 230, image: new URL('../assets/images/plats/pizza/quatre_fromages.jpg', import.meta.url).href },
    { id: 10, type: TYPES.PIZZA, name: 'Vegetarian', topSale: false, rate: 4.6, price: 11, stock: 9, extra: 220, image: new URL('../assets/images/plats/pizza/pizza_vege.jpg', import.meta.url).href },

    // 🥤 Boissons
    { id: 11, type: TYPES.BOISSONS, name: 'Coca-Cola', topSale: true, rate: 4.9, price: 2, stock: 30, extra: 330, image: new URL('../assets/images/plats/boissons/coca.jpg', import.meta.url).href },
    { id: 12, type: TYPES.BOISSONS, name: 'Fanta', topSale: false, rate: 4.5, price: 2, stock: 25, extra: 330, image: new URL('../assets/images/plats/boissons/fanta.jpg', import.meta.url).href },
    { id: 13, type: TYPES.BOISSONS, name: 'Sprite', topSale: false, rate: 4.3, price: 2, stock: 20, extra: 330, image: new URL('../assets/images/plats/boissons/sprite.jpg', import.meta.url).href },
    { id: 14, type: TYPES.BOISSONS, name: 'Eau minérale', topSale: true, rate: 5.0, price: 1, stock: 50, extra: 500, image: new URL('../assets/images/plats/boissons/eau.jpg', import.meta.url).href },
    { id: 15, type: TYPES.BOISSONS, name: 'Jus d’orange', topSale: false, rate: 4.7, price: 3, stock: 15, extra: 250, image: new URL('../assets/images/plats/boissons/jus_orange.jpg', import.meta.url).href },

    // 🍣 Sushi
    { id: 16, type: TYPES.SUSHI, name: 'California Roll', topSale: true, rate: 4.8, price: 14, stock: 12, extra: 280, image: new URL('../assets/images/plats/sushi/california_roll.jpg', import.meta.url).href },
    { id: 17, type: TYPES.SUSHI, name: 'Salmon Nigiri', topSale: false, rate: 4.6, price: 13, stock: 10, extra: 240, image: new URL('../assets/images/plats/sushi/ngiri.jpg', import.meta.url).href },
    { id: 18, type: TYPES.SUSHI, name: 'Tuna Sashimi', topSale: false, rate: 4.5, price: 15, stock: 8, extra: 200, image: new URL('../assets/images/plats/sushi/sashimi.jpg', import.meta.url).href },
    { id: 19, type: TYPES.SUSHI, name: 'Maki Avocat', topSale: false, rate: 4.2, price: 12, stock: 14, extra: 220, image: new URL('../assets/images/plats/sushi/maki.jpg', import.meta.url).href },
    { id: 20, type: TYPES.SUSHI, name: 'Dragon Roll', topSale: true, rate: 4.9, price: 16, stock: 5, extra: 300, image: new URL('../assets/images/plats/sushi/dragon_roll.jpg', import.meta.url).href },

    // 🥗 Bols
    { id: 21, type: TYPES.BOL, name: 'Poke Bowl Saumon', topSale: true, rate: 4.7, price: 14, stock: 10, extra: 280, image: new URL('../assets/images/plats/bols/poke_ball_salmon.jpg', import.meta.url).href },
    { id: 22, type: TYPES.BOL, name: 'Poke Bowl Crevettes', topSale: false, rate: 4.5, price: 13, stock: 9, extra: 260, image: new URL('../assets/images/plats/bols/poke_ball_crevette.jpg', import.meta.url).href },
    { id: 23, type: TYPES.BOL, name: 'Buddha Bowl', topSale: false, rate: 4.3, price: 12, stock: 8, extra: 240, image: new URL('../assets/images/plats/bols/buddha_bowl.jpg', import.meta.url).href },
    { id: 24, type: TYPES.BOL, name: 'Bol Poulet Teriyaki', topSale: false, rate: 4.4, price: 13, stock: 7, extra: 250, image: new URL('../assets/images/plats/bols/teriyaki.jpg', import.meta.url).href },
    { id: 25, type: TYPES.BOL, name: 'Bol Vegan', topSale: false, rate: 4.6, price: 12, stock: 6, extra: 230, image: new URL('../assets/images/plats/bols/bowl_vege.jpg', import.meta.url).href }
];

export default menuData;
