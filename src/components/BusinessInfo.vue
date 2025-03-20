<script>

</script>

<template>

    <div class="business-info">
        <div class="adress">
            <h3>Adresse</h3>
            <p>123 Rue de la Paix, Paris, France</p>
        </div>
        <div class="business-contact">
            <h3>Contact</h3>
            <div class="phone-email">
                <div class="phone">
                    <p>Téléphone :</p>
                    <p>01 23 45 67 89</p>
                </div>
                <div class="email">
                    <p>Email :</p>
                    <p>contact@gmail.com</p>
                </div>
            </div>
           
        </div>
        <div class="socials">
            <h3>Réseaux sociaux</h3>
            <div class="social-icons">
                <div class="social-icon">
                    <i class="fab fa-facebook"></i>
                </div>
                <div class="social-icon">
                    <i class="fab fa-instagram"></i>
                </div>
                <div class="social-icon">
                    <i class="fab fa-twitter"></i>
                </div>
                <div class="social-icon">
                    <i class="fab fa-linkedin"></i>
                </div>
            </div>
        </div>
    </div>
    
</template>

<style scoped>
.business-info {
    width: 40%;
    background-color: #333;
    color: white;
    border-radius: 1rem;
    padding: 4rem;
    display: flex;
    flex-direction: column;
    gap: 4rem;
}

.adress, .business-contact, .socials {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.phone, .email {
    display: flex;
    flex-direction: row;
    gap: 1rem;
}

.phone-email {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.social-icons {
    display: flex;
    justify-content: center;
    gap: 3rem;
}

.social-icon {
    font-size: 2rem;
    cursor: pointer;
    width: 4rem;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #212121;
    transition: all 0.3s ease;
}

.social-icon:hover {
    transform: scale(1.1);
    background-color: #f93232;
}

/* .social-icons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 3rem;
}

.social-icons i {
    font-size: 2rem;
    cursor: pointer;
    transition: all 0.3s ease;
}

.social-icons i:hover {
    transform: scale(1.1);
    color: #f93232;
} */
</style>