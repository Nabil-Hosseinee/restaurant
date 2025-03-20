<script setup>
import { ref } from 'vue';
import { usePanier } from '../shared/usePanier';

const props = defineProps({
    item: {
        type: Object,
        required: true
    }
});

const { ajouterAuPanier } = usePanier();

const ajoutAuPanier = () => {
    ajouterAuPanier(props.item);
};
</script>

<template>

    <div class="menu-item">
        <div class="menu-item-img">
            <img :src="item.image" alt="image">
        </div>
        <h3>{{ item.name }}</h3>
        <p>⭐️ {{ item.rate }}</p>
        <div class="menu-item-info">
            <div>
                <p class="menu-item-info-title">Price</p>
                <p class="menu-item-info-value">{{ item.price }} €</p>
            </div>
            <div class="menu-mid-info">
                <p class="menu-item-info-title">Stock</p>
                <p class="menu-item-info-value">{{ item.stock }}</p>
            </div>
            <div>
                <p class="menu-item-info-title">Extra</p>
                <p class="menu-item-info-value">{{ item.extra }}g</p>
            </div>
        </div>

        <!-- Top Sale -->
        <div class="top-sale" v-if="item.topSale">
            <p>Top Sale</p>
        </div>

        <!-- Hover ajout au panier -->
        <div class="hover-ajout-panier">
            <button @click="ajoutAuPanier">Ajout au panier</button>
        </div>
    </div>
    
</template>

<style scoped>
.menu-item {
    width: 20%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    border: 1px solid #ccc;
    border-radius: 1.6rem;
    position: relative;
}

.menu-item-img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 1.6rem;
    overflow: hidden;
}

.menu-item-info {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 0 1rem;
}

.menu-mid-info {
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
    padding: 0 1rem;
}

.menu-item-info div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
}

.menu-item-info-title {
    font-size: 1.2rem;
    font-weight: 600;
}

.menu-item-info-value {
    font-size: 1.4rem;
    font-weight: 400;
}

.top-sale {
    position: absolute;
    top: 0;
    right: 0;
    background-color: #f93232;
    color: #fff;
    padding: 0.5rem 1rem;
    border-top-right-radius: 1.6rem;
    border-bottom-left-radius: 1.6rem;
    font-size: 1.6rem;
    font-weight: 600;
}

.hover-ajout-panier {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    color: #fff;
    padding: 0.5rem 1rem;
    border-radius: 1.6rem;
    opacity: 0;
    transition: opacity 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
}

.menu-item:hover .hover-ajout-panier {
    opacity: 0.8;
}

.hover-ajout-panier button {
    background-color: rgb(247, 91, 91);
    color: #fff;
    padding: 1.5rem 2rem;
    border-radius: 1.6rem;
    font-size: 1.6rem;
    font-weight: 600;
    text-transform: uppercase;
    border: none;
    cursor: pointer;
}
</style>