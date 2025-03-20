<script setup>
import { usePanier } from '../shared/usePanier';
import { computed, ref } from 'vue';
import CardInfo from './CardInfo.vue';

const paymentMethod = ref('');
const cardInfo = ref(null);

const { panier, viderPanier } = usePanier();

const total = computed(() => {
    return panier.value.reduce((total, item) => total + (item.price * item.quantite), 0);
});

const sousTotal = computed(() => {
    return total.value * 0.8;
});

const tva = computed(() => {
    return total.value * 0.2;
});

const handleCardInfoSubmitted = (info) => {
    cardInfo.value = info;
};

const handleCheckout = () => {
    if (paymentMethod.value === 'card' && !cardInfo.value) {
        alert('Veuillez remplir les informations de carte');
        return;
    }

    if (paymentMethod.value === 'card') {
        // Simuler le traitement du paiement
        alert('Paiement réussi ! Votre commande a été validée.');
        viderPanier();
    } else if (paymentMethod.value === 'cash') {
        alert('Commande validée ! Vous paierez à la livraison.');
        viderPanier();
    } else {
        alert('Veuillez sélectionner une méthode de paiement');
    }
};
</script>

<template>
    <div class="payment">
        <h2>Récapitulatif</h2>
        <div class="payment-details">
            <div class="payment-item">
                <span>Sous-total</span>
                <span>{{ sousTotal.toFixed(2) }}€</span>
            </div>
            <div class="payment-item">
                <span>TVA (20%)</span>
                <span>{{ tva.toFixed(2) }}€</span>
            </div>
            <div class="payment-item total">
                <span>Total</span>
                <span>{{ total.toFixed(2) }}€</span>
            </div>
        </div>
        <div class="payment-methods">
            <h3>Méthode de paiement</h3>
            <div class="payment-options">
                <button class="payment-option" @click="paymentMethod = 'card'">
                    <i class="fa-solid fa-credit-card"></i>
                    <span>Carte bancaire</span>
                </button>
                <CardInfo v-if="paymentMethod === 'card'" @card-info-submitted="handleCardInfoSubmitted" />
                <button class="payment-option" @click="paymentMethod = 'cash'">
                    <i class="fa-solid fa-money-bill-wave"></i>
                    <span>Espèces</span>
                </button>
            </div>
        </div>
        <button class="checkout-btn" @click="handleCheckout">
            Commander
        </button>
    </div>
</template>

<style scoped>
.payment {
    width: 40%;
    background-color: #333;
    padding: 2rem;
    border-radius: 8px;
    color: white;
    display: flex;
    flex-direction: column;
    /* min-height: 75vh; */
    height: 100%;
    position: relative;
}

h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
}

.payment-details {
    margin-bottom: 2rem;
}

.payment-item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    color: #ccc;
}

.payment-item.total {
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid #444;
}

.payment-methods {
    margin-bottom: 2rem;
    flex: 1;
}

h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
}

.payment-options {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.payment-option {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    background-color: #444;
    border: none;
    border-radius: 4px;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s;
}

.payment-option:hover {
    background-color: #555;
}

.payment-option i {
    font-size: 1.5rem;
}

.checkout-btn {
    width: 100%;
    padding: 1.5rem;
    background-color: #f93232;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s;
    margin-top: auto;
}

.checkout-btn:hover {
    background-color: #ff4444;
}
</style>