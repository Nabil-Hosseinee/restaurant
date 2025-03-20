<script setup>
import { ref } from 'vue';
import filterOptions from '../data/filterData';
import ItemFilter from './ItemFilter.vue';
    
const filters = ref(filterOptions);

const activeFilter = ref('');

const handleFilterClick = (id) => {
    filters.value.forEach(filter => {
        filter.isActive = filter.id === id;
    });
    activeFilter.value = id;
    emit('filter-change', id);
}

const emit = defineEmits(['filter-click', 'filter-change']);
</script>

<template>
    <div class="filtre">
        <h2>Trouver votre plat</h2>
        <div class="filtre-container">
            <ItemFilter v-for="filter in filters" :key="filter.id" :filter="filter" @filter-click="handleFilterClick" />
        </div>
    </div>
</template>

<style scoped>
h2 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 4rem;
}

.filtre-container {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
}
</style>
