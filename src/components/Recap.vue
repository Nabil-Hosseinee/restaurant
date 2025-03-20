<script setup>
import { ref } from 'vue';

import { usePanier } from '@/shared/usePanier';

const { panier } = usePanier();
</script>

<template>
    <div class="recap">
        <h2>Recap</h2>
        <div class="recap-container">
            <div class="recap-item-container">
                <p>{{ panier.length }}</p>
                <div class="recap-item" v-for="item in panier" :key="item.id">
                    <p>{{ item.name }}</p>
                    <p>{{ item.price }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.recap {
    width: 100%;
    min-height: 85vh;
    padding: 4rem;
}

</style>


