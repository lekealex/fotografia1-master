<template>
    <header class="sticky-top site-header">
        <nav class="navbar">
            <div class="logo">Fotographx</div>
            <ul class="nav-links">
                <li>
                    <RouterLink to="/">Página Inicial</RouterLink>
                </li>
                <li>
                    <RouterLink to="/sobre">Sobre Nós</RouterLink>
                </li>
                <li>
                    <RouterLink to="/servico">Serviços</RouterLink>
                </li>
                <li>
                    <RouterLink to="/contato">Contato</RouterLink>
                </li>
                <li>
                    <RouterLink to="/conta">Faça Login</RouterLink>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700&display=swap');

* {
    font-family: 'Raleway', sans-serif;
}

.site-header {
    color: #ccd5ae;
    padding: 20px 0;
    width: 100%;
    left: 0;
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    width: 100%;
    color: #ccd5ae;
}

.logo {
    font-size: 24px;
    font-weight: bold;
}

.nav-links {
    list-style: none;
    display: flex;
    gap: 20px;
    font-weight: 600;
}

.nav-links li {
    position: relative;
}

.nav-links li a {
    text-decoration: none;
    color: #ccd5ae;
    padding: 5px 10px;
    transition: color 0.3s ease;
    display: flex;
    align-items: center;
}

.nav-links li a::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 3px;
    background-color: #d4a373;
    transform: scaleY(0);
    transition: transform 0.3s ease;
}

.nav-links li a:hover {
    color: #d4a373;
}

.nav-links li a:hover::before {
    transform: scaleY(1);
}</style>
