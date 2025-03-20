<script setup>
import InfoCommande from './InfoCommande.vue';
import Form from './Form.vue';
import  BusinessInfo from './BusinessInfo.vue';

const handleSubmit = (data) => {
    console.log(data);
    // Pour l'instant, je met une alerte pour simuler l'envoi des données
    if (data.nom && data.prenom && data.email && data.tel && data.message) {
        alert('Données envoyées avec succès !');
    } else {
        alert('Veuillez remplir tous les champs');
    }
}

</script>

<template>
    <div class="contact">
        <InfoCommande title="Contact"/>
        <div class="contact-container">
            <div class="contact-info">
                <span class="stars">⭐️⭐️⭐️</span>
                <h2>Contactez-nous</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                </p>
            </div>
            <div class="contact-form">
                <Form @submit="handleSubmit" />
                <BusinessInfo />
            </div>
        </div>
    </div>
</template>

<style scopde>
.contact {
    background-color: rgb(21, 21, 21);
    color: white;
}   

.contact-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6rem;
    width: 100%;
    padding: 4rem;
}

.contact-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}

.contact-form {
    display: flex;
    justify-content: space-between;
    width: 100%;
}

</style>