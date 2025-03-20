<script setup>
import { ref } from 'vue';

const form = ref({
    nom: '',
    prenom: '',
    email: '',
    tel: '',
    message: '',
});

const emit = defineEmits(['submit']);

const handleSubmit = () => {
    emit('submit', form.value);
    form.value = {
        nom: '',
        prenom: '',
        email: '',
        tel: '',
        message: '',
    };
};
</script>

<template>

    <form @submit.prevent="handleSubmit">
        <div class="row">
            <div class="row-item">
                <label for="nom">Nom</label>    
                <input type="text" placeholder="Nom" v-model="form.nom" required>
            </div>
            <div class="row-item">
                <label for="prenom">Prénom</label>
                <input type="text" placeholder="Prénom" v-model="form.prenom" required>    
            </div>
        </div>
        <div class="row">
            <div class="row-item">
                <label for="email">Email</label>
                <input type="email" placeholder="Email" v-model="form.email" required>
            </div>
            <div class="row-item">
                <label for="tel">Téléphone</label>
                <input type="tel" placeholder="Téléphone" v-model="form.tel" required>
            </div>
        </div>
        <div class="row textarea-row">
            <label for="message">Message</label>
            <textarea name="" id="" placeholder="Message" v-model="form.message" required></textarea>
        </div>
        <button type="submit" class="submit-btn">Envoyer</button>
    </form>
</template>

<style scoped>
form {
    width: 55%;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    height: 100%;
}

.row {
    display: flex;
    gap: 4rem;
}

.row-item {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex: 1;
}

.row-item input, .textarea-row textarea {
    padding: 1rem;
    border-radius: 0.5rem;
    border: 1px solid #333;
    outline: none;
    background-color: #212121;
    color: white;
    font-size: 1.6rem;
    font-weight: 500;
}

.row-item input:focus, .textarea-row textarea:focus {
    border: 1px solid #f93232;
}

.textarea-row {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.textarea-row textarea {
    padding: 1rem;
    border-radius: 0.5rem;
    border: none;
    outline: none;
    min-height: 10rem;
}

.submit-btn {
    padding: 1.5rem 1rem;
    border-radius: 0.5rem;
    border: none;
    outline: none;
    background-color: #f93232;
    color: white;
    font-weight: bold;
    cursor: pointer;
}

.submit-btn:hover {
    background-color: #f63b3b;
    color: black;
}
</style>
