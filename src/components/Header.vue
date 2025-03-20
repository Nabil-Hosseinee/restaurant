<script>
</script>

<template>
  <header>
    <div class="logo">
        <RouterLink to="/">
            <i class="fa-solid fa-bowl-food"></i>
        </RouterLink>
    </div>
    <nav>
        <RouterLink to="/">
            <i class="fa-solid fa-house"></i>
        </RouterLink>
        <RouterLink to="/commande">
            <i class="fa-solid fa-pizza-slice"></i>
        </RouterLink>
        <RouterLink to="/contact">
            <i class="fa-solid fa-address-book"></i>
        </RouterLink>
    </nav>
    <div class="log-out">
        <i class="fa-solid fa-right-from-bracket"></i>
    </div>
  </header>
</template>

<style scoped>
header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 100vh;
    background-color: black;
    border-right: 1px solid #333;
}

.logo {
    width: 100%;
    min-height: 15vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 5rem;
    color: white;
    border-bottom: 1px solid #333;
}

nav {
    min-height: 70vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    gap: 10rem;
    color: white;
}

nav a {
    padding: 2rem;
    border-radius: 50%;
}

.router-link-active:not(.logo .router-link-active) {
    background-color: rgb(249, 50, 50);
}

.log-out {
    min-height: 15vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.log-out i {
    font-size: 2.5rem;
    color: white;
}

</style>

