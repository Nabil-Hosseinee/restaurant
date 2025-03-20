<script setup>
import { ref, watch } from 'vue';

const cardHolderName = ref('');
const cardNumber = ref('');
const cardExpirationDate = ref('');
const cardCvv = ref('');

const emit = defineEmits(['card-info-submitted']);

const formatCardNumber = (event) => {
    let value = event.target.value.replace(/\s/g, '');
    value = value.replace(/(\d{4})/g, '$1 ').trim();
    value = value.slice(0, 19);
    cardNumber.value = value;
};

const formatCvv = (event) => {
    let value = event.target.value.replace(/\D/g, '');
    value = value.slice(0, 3);
    cardCvv.value = value;
};

// Émettre les données à chaque changement
watch([cardHolderName, cardNumber, cardExpirationDate, cardCvv], ([name, number, date, cvv]) => {
    emit('card-info-submitted', {
        cardHolderName: name,
        cardNumber: number,
        cardExpirationDate: date,
        cardCvv: cvv
    });
});
</script>

<template>
    <div class="card-info">
        <div class="card-info-item">
            <label for="cardHolderName">Nom du titulaire</label>
            <input type="text" placeholder="Nom du titulaire" v-model="cardHolderName">
        </div>

        <div class="card-info-item">
            <label for="cardNumber">Numéro de carte</label>
            <input type="text" v-model="cardNumber" @input="formatCardNumber" placeholder="1234 5678 9012 3456" maxlength="19">
        </div>

        <div class="card-info-item-date">
            <div class="card-info-item">
                <label for="cardExpirationDate">Date d'expiration</label>
                <input type="month" placeholder="Date d'expiration" v-model="cardExpirationDate">
            </div>
            <div class="card-info-item">
                <label for="cardCvv">CVV</label>
                <input type="text" v-model="cardCvv" @input="formatCvv" placeholder="123" maxlength="3">
            </div>
        </div>
    </div>
</template>

<style scoped>
.card-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
}

.card-info-item {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex: 1;
}

.card-info-item-date {
    display: flex;
    flex-direction: row;
    gap: 1rem;
}

input {
    padding: 1rem;
    border-radius: 0.5rem;
    border: 1px solid #ccc;
    width: 100%;
    outline: none;
    background-color: #222;
    color: white;
}
</style>