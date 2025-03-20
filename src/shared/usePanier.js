import { ref, computed } from 'vue';

const panier = ref([]);

export function usePanier() {
    const nombreArticles = computed(() => {
        const total = panier.value.reduce((total, item) => total + item.quantite, 0);
        console.log('Panier:', panier.value);
        console.log('Nombre total d\'articles:', total);
        return total;
    });

    const ajouterAuPanier = (item) => {
        const itemExistant = panier.value.find(i => i.id === item.id);
        if (itemExistant) {
            itemExistant.quantite++;
        } else {
            panier.value.push({ ...item, quantite: 1 });
        }
        console.log('Item ajouté:', item);
        console.log('Panier après ajout:', panier.value);
    };

    const supprimerDuPanier = (itemId) => {
        const index = panier.value.findIndex(item => item.id === itemId);
        if (index !== -1) {
            panier.value.splice(index, 1);
        }
    };

    const modifierQuantite = (itemId, nouvelleQuantite) => {
        const item = panier.value.find(i => i.id === itemId);
        if (item) {
            if (nouvelleQuantite <= 0) {
                supprimerDuPanier(itemId);
            } else {
                item.quantite = nouvelleQuantite;
            }
        }
        console.log(panier);
    };

    const viderPanier = () => {
        panier.value = [];
    };

    return {
        panier,
        nombreArticles,
        ajouterAuPanier,
        supprimerDuPanier,
        modifierQuantite,
        viderPanier
    };
}