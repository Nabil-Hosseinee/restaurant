<script setup>
import { ref } from 'vue';
import { usePanier } from '../shared/usePanier';

const props = defineProps(['title']);
const { nombreArticles } = usePanier();
</script>

<template>
    <div class="info-commande-container">
        <div class="info-commande">
            <h1>{{ title }}</h1>
        </div>
        <div class="info-user">
            <RouterLink class="info-user-link" to="/panier">
                <i class="fa-solid fa-cart-shopping"></i>
                <span v-if="nombreArticles > 0" class="panier-count">{{ nombreArticles }}</span>
            </RouterLink>
            <i class="fa-solid fa-user"></i>
            <span class="name">John Doe</span>
        </div>
    </div>
</template>

<style scoped>
.info-commande-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: black;
    border-bottom: 1px solid #333;
    min-height: 15vh;
}

.info-commande {
    padding: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.info-commande h1 {
    text-transform: uppercase;
    font-size: 2.5rem;
    font-weight: 600;
    color: white;
}

.info-user {
    display: flex;      
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    padding: 4rem;
}

.info-user i {
    font-size: 2rem;
    color: white;
}

.info-user .name {
    font-size: 1.5rem;
    color: white;
    font-weight: 600;
}

.info-user-link {
    position: relative;
    color: white;
    text-decoration: none;
}

.panier-count {
    position: absolute;
    top: -13px;
    right: -10px;
    background-color: rgb(247, 91, 91);
    color: white;
    font-weight: 600;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>