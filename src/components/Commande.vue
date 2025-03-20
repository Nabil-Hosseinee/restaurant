<script setup>
import InfoCommande from './InfoCommande.vue';
import Filtre from './Filtre.vue';
import Menu from './Menu.vue';

const plats = "Plats";
</script>

<template>
    <div class="commande">
        <InfoCommande :title="plats" class="info-commande"/>
        <Menu class="menu" />
    </div>
</template>

<style scoped>
.commande {
    width: 100%;
    background-color: rgb(21, 21, 21);
    display: flex;
    flex-direction: column;
    color: white;
}

.menu {
    width: 100%;
    flex: 0.675;
}

</style>