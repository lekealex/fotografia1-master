<script setup>
  import FuncionarioComp from "@/components/FuncionarioComp.vue";
  import TemasComp from "@/components/TemasComp.vue";
</script>

<template>
  <main>
    <section class="about-section">
      <h1>Sobre Fotographx</h1>
      <p class="about-intro">Bem-vindo à Fotographx, a sua escolha confiável para capturar momentos inesquecíveis. Especializados em diversos temas, exploramos a beleza e a emoção através da lente.</p>
      <TemasComp />
    </section>
    <FuncionarioComp />

  </main>
  <RouterView />
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700&display=swap');

* {
font-family: 'Raleway', sans-serif;
}
.about-section {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.about-intro {
  margin-bottom: 30px;
}

.theme-container {
  display: flex;
  align-items: center;
  margin-bottom: 40px;
}

.theme-container.reverse {
  flex-direction: row-reverse;
}

.theme-container img {
  width: 40%;
  max-width: 400px;
  margin: 20px;
  border: 3px solid #d4a373;
}

.text-content {
  width: 60%;
  padding: 20px;
}

.professionals-section {
  padding: 20px;
  text-align: center;
}

.professionals-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.professional-card {
  width: calc(50% - 20px);
  margin: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  padding: 20px;
}

.professional-card img {
  width: 100%;
  max-width: 200px;
  height: auto;
  border-radius: 50%;
}

.professional-card h3 {
  margin: 10px 0;
}

.professional-card p {
  color: #555;
}

.professional-card:hover {
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s ease;
}
</style>

