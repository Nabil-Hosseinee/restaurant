<script setup>
import InfoCommande from './InfoCommande.vue';
</script>

<template>
    <div class="home">
        <InfoCommande title="Accueil" />
        <div class="home-container">
            <div class="overlay"></div>
            <div class="home-content">
                <h2>Bienvenue sur notre site</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                <div class="button-container">
                    <RouterLink to="/commande"><button class="btn-primary">Voir nos produits</button></RouterLink>
                    <RouterLink to="/contact"><button class="btn-secondary">Contactez-nous</button></RouterLink>
                </div>
            </div>
        </div>

        <div class="history">
            <div class="history-content">
                <h2>Notre histoire</h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque repellat quod accusamus expedita ducimus fugit sed possimus? Officiis ad temporibus velit ipsum dolore et voluptatibus sequi, pariatur consequuntur voluptate. Animi impedit quam omnis sunt esse, provident commodi tenetur eligendi, dignissimos voluptate, aperiam molestiae ratione odit fuga natus perspiciatis magni cupiditate.
                </p>
            </div>
            <div class="history-image">
                <!-- image a modifier -->
                <img src="../assets/images/background/home_bg.jpg" alt="Notre histoire">
            </div>
        </div>
    </div>
</template>

<style scoped>
.home {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: rgb(21, 21, 21);
    color: #fff;
}

.home-container {
    background-image: url('../assets/images/background/home_bg.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 50vh;
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}

.overlay {
    background-color: rgba(0, 0, 0, 0.6);
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
}

.home-content {
    position: relative;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4rem;
}

.home-content h2 {
    font-size: 40px;
    font-weight: 600;
}

.home-content p {
    font-size: 20px;
}

.button-container {
    display: flex;
    gap: 20px;
}

.history {
    display: flex;
    justify-content: space-between;
    padding: 4rem;
}

.history-content {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 60%;
    line-height: 1.5;
}

.history-image {
    width: 30%;
    border-radius: 2rem;
    overflow: hidden;
}


</style>