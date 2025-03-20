<script setup>
import { usePanier } from '../shared/usePanier';
import InfoCommande from './InfoCommande.vue';
import PanierItem from './PanierItem.vue';
import Payment from './Payment.vue';

const { panier } = usePanier();
</script>

<template>
    <div class="panier">
        <InfoCommande title="Panier" />
        <div class="panier-container">
            <div v-if="panier.length === 0" class="panier-details panier-vide">
                <h2>Votre panier est vide</h2>
            </div>
            <div v-else class="panier-details panier-items">
                <PanierItem v-for="item in panier" :key="item.id" :item="item" />
            </div>
            <Payment />
        </div>
    </div>
</template>

<style scoped>
.panier {
    width: 100%;
    background-color: rgb(21, 21, 21);
    display: flex;
    flex-direction: column;
    color: white;
}

.panier-container {
    padding: 4rem;
    display: flex;
    justify-content: space-between;
}

.panier-details {
    /* background-color: red; */
    width: 55%;
}

.panier-vide {
    text-align: center;
    padding: 4rem;
}

.panier-vide h2 {
    font-size: 2rem;
    color: #666;
}

.panier-items {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}
</style>