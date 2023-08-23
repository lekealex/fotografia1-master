<template>
    <header class="sticky-top site-header">
    <nav class="navbar">
      <div class="logo">Meu Site</div>
      <ul class="nav-links">
        <li><RouterLink to="/">Página Inicial</RouterLink></li>
        <li><RouterLink to="/sobre">Sobre Nós</RouterLink></li>
        <li><RouterLink to="/servico">Serviços</RouterLink></li>
        <li><RouterLink to="/contato">Contato</RouterLink></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>

.site-header {
  background-color: #012345;
  color: #fff;
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
}

.logo {
  font-size: 24px;
  font-weight: bold;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 20px;
}

.nav-links li a {
  text-decoration: none;
  color: #fff;
  transition: color 0.3s ease;
}

.nav-links li a:hover {
  color: #ff9900;
}

</style>