<script setup>
import { usePanier } from '@/shared/usePanier';

const { modifierQuantite, supprimerDuPanier } = usePanier();

const props = defineProps({
    item: {
        type: Object,
        required: true
    }
});
</script>

<template>
    <div class="panier-item">
        <div class="item-info">
            <div class="item-image">
                <img :src="item.image" :alt="item.name">
                <div v-if="item.topSale" class="top-sale">
                    <span>Top vente</span>
                </div>
            </div>
            <div class="item-details">
                <h3>{{ item.name }}</h3>
                <p>{{ item.description }}</p>
                <p class="price">{{ item.price }}€</p>
            </div>
        </div>
        <div class="item-quantity">
            <button @click="modifierQuantite(item.id, item.quantite - 1)">-</button>
            <span>{{ item.quantite }}</span>
            <button @click="modifierQuantite(item.id, item.quantite + 1)">+</button>
        </div>
        <button class="remove-btn" @click="supprimerDuPanier(item.id)">
            <i class="fa-solid fa-trash"></i>
        </button>
    </div>
</template>

<style scoped>
.panier-items {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.panier-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    background-color: #333;
    border-radius: 1.6rem;
}

.item-info {
    display: flex;
    gap: 2rem;
    align-items: center;
    flex: 1;
}

.item-image {
    position: relative;
}

.item-info img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 8px;
}

.top-sale {
    position: absolute;
    top: 0;
    right: 0;
    background-color: #f93232;
    color: white;
    padding: 0.5rem;
    border-top-right-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
    font-size: 1rem;
    font-weight: bold;
}
.item-details {
    flex: 1;
}

.item-details h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
}

.item-details p {
    color: #ccc;
    margin-bottom: 0.5rem;
}

.price {
    font-weight: bold;
    color: #f93232;
}

.item-quantity {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 0 2rem;
}

.item-quantity button {
    background-color: #444;
    border: none;
    color: white;
    width: 30px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
}

.item-quantity button:hover {
    background-color: #555;
}

.item-quantity span {
    min-width: 30px;
    text-align: center;
}

.remove-btn {
    background: none;
    border: none;
    color: #f93232;
    cursor: pointer;
    font-size: 1.2rem;
}

.remove-btn:hover {
    color: #ff4444;
}
</style>