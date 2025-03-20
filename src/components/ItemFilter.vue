<script setup>
import { ref } from 'vue';

const props = defineProps({
    filter: {
        type: Object,
        required: true
    }
});

const filters = ref(props.filter);

</script>

<template>
    <div class="filtre-item" :class="{ 'active': filters.isActive }" @click="$emit('filter-click', filters.id)">
        <div class="item-icon-container">
            <img :src="filters.icon" alt="icon">
        </div>
        <span>{{ filters.name }}</span>
    </div>
</template>

<style scoped>

.filtre-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
}

.item-icon-container {
    width: 40%;
    object-fit: contain;
    padding: 2rem;
    border-radius: 50%;
    margin-bottom: 2rem;
}

.filtre-item.active .item-icon-container {
    background-color: #f93232;
}

.filtre-item.active span {
    color: #f93232;
    font-weight: bold;
}

</style>