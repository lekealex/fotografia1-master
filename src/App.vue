<script setup>
  import CabecalhoComp from "@/components/CabecalhoComp.vue";
</script>

<template>
  <CabecalhoComp />
  <RouterView />
</template>

<style scoped>
.container {
  background-color: #012345;
  max-width: none;
  width: 100%;
}
/* Estilos do cabeçalho */

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

/* Estilos para a imagem */
.image-container {
  text-align: center;
  margin-top: 50px;
  border: 1px solid #ec0707; /* Adicionando a borda */
  padding: 10px; /* Espaçamento interno da borda */
}

.image-container img {
  max-width: 100%;
}

/* Estilos para as divs adicionais */
.additional-container {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.additional-item {
  width: calc(33.33% - 10px); /* Largura dividida em três com espaçamento entre as divs */
  border: 1px solid #012345;
  padding: 10px;
  text-align: center;
}

/* Estilos para as divs no fundo */
.bottom-container {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  /* width: 200px; */
}

.bottom-item {
  /* width: calc(33.33% - 10px); Largura dividida em três com espaçamento entre as divs */
  width: 220px;
  border: 1px solid #012345;
  padding: 10px;
  text-align: center;
  overflow: hidden;
  display: flex;
}
.bottom-item:hover {
  /* width: calc(33.33% - 10px); Largura dividida em três com espaçamento entre as divs */
  width: 300px;
}
.bottom-item img {
  width: 220px;
}
.bottom-item .bottom-text {
  color: white;
}

.xd-container {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
.bottom-i {
  width: calc(33.33% - 10px); /* Largura dividida em três com espaçamento entre as divs */
  border: 1px solid #012345;
  padding: 10px;
  text-align: center;
}
</style>
