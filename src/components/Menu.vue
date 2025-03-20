<script setup>
import menuData from '../data/menuData';
import { ref, computed } from 'vue';
import MenuItem from './MenuItem.vue';
import Filtre from './Filtre.vue';

const menuItems = ref(menuData);
const activeFilter = ref('');

const filteredMenuItems = computed(() => {
    if (!activeFilter.value || activeFilter.value === 'all') return menuItems.value;
    return menuItems.value.filter(item => item.type === activeFilter.value);
});

const handleFilterChange = (filterId) => {
    activeFilter.value = filterId;
};

</script>

<template>
    <div class="menu">
        <Filtre class="filtre" @filter-change="handleFilterChange" />
        <h2>Menu</h2>
        <div class="menu-container">
            <MenuItem v-for="item in filteredMenuItems" :key="item.id" :item="item" />
        </div>
    </div>
</template>

<style scoped>
.menu {
    padding: 4rem;
}

.filtre {
    margin-bottom: 4rem;
}

h2 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 4rem;
}

.menu-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 5rem;
}
</style>