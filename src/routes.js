import Home from './components/Home.vue'
import Commande from './components/Commande.vue'
import Contact from './components/Contact.vue'
import Panier from './components/Panier.vue'


export const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/commande',
        component: Commande
    },
    {
        path: '/contact',
        component: Contact
    },
    {
        path: '/panier',
        component: Panier
    }
]
