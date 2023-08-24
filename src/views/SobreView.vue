<template>
  <main>
    <section class="about-section">
      <h1>Sobre Fotographx</h1>
      <p class="about-intro">Bem-vindo à Fotographx, a sua escolha confiável para capturar momentos inesquecíveis. Especializados em diversos temas, exploramos a beleza e a emoção através da lente.</p>

      <!-- Casamentos -->
      <div class="theme-container">
        <div class="text-content">
          <h2>Tema: Casamentos</h2>
          <p>Com uma abordagem sensível e artística, capturamos o amor e a alegria dos casamentos, criando memórias que duram uma vida inteira.</p>
        </div>
        <img src="@/assets/imagens/1.jpg" alt="Casamentos" />
      </div>

      <!-- Retratos -->
      <div class="theme-container reverse">
        <div class="text-content">
          <h2>Tema: Retratos</h2>
          <p>De retratos individuais a fotos em família, nossa equipe habilidosa capta a essência de quem você é, refletindo personalidade e emoção.</p>
        </div>
        <img src="@/assets/imagens/2.jpg" alt="Retratos" />
      </div>

      <!-- Natureza -->
      <div class="theme-container">
        <div class="text-content">
          <h2>Tema: Natureza</h2>
          <p>Imortalizamos a beleza indomável e a tranquilidade da natureza, da fauna à flora.</p>
        </div>
        <img src="@/assets/imagens/1.jpg" alt="Natureza" />
      </div>

      <!-- Eventos Corporativos -->
      <div class="theme-container reverse">
        <div class="text-content">
          <h2>Tema: Eventos Corporativos</h2>
          <p>Com uma abordagem profissional, capturamos os momentos-chave dos seus eventos corporativos.</p>
        </div>
        <img src="@/assets/imagens/2.jpg" alt="Eventos Corporativos" />
      </div>

    </section>
    <section class="professionals-section">
      <h2>Nossos Profissionais</h2>
      <div class="professionals-grid">
        <!-- Profissional 1 -->
        <div class="professional-card">
          <img src="@/assets/imagens/6.jpg" alt="Profissional 1" />
          <h3>Nome do Profissional 1</h3>
          <p>Especializado em fotografia de casamento</p>
        </div>

        <!-- Profissional 2 -->
        <div class="professional-card">
          <img src="@/assets/imagens/6.jpg" alt="Profissional 2" />
          <h3>Nome do Profissional 2</h3>
          <p>Especializado em retratos e fotografia de família</p>
        </div>

        <div class="professional-card">
          <img src="@/assets/imagens/7.jpg" alt="Profissional 3" />
          <h3>Nome do Profissional 3</h3>
          <p>Especializado em fotografia de natureza</p>
        </div>

        <!-- Profissional 4 -->
        <div class="professional-card">
          <img src="@/assets/imagens/6.jpg" alt="Profissional 4" />
          <h3>Nome do Profissional 4</h3>
          <p>Especializado em fotografia de eventos corporativos</p>
        </div>

        <!-- Profissional 5 -->
        <div class="professional-card">
          <img src="@/assets/imagens/7.jpg" alt="Profissional 5" />
          <h3>Nome do Profissional 5</h3>
          <p>Especializado em fotografia de paisagens urbanas</p>
        </div>

        <!-- Profissional 6 -->
        <div class="professional-card">
          <img src="@/assets/imagens/6.jpg" alt="Profissional 6" />
          <h3>Nome do Profissional 6</h3>
          <p>Especializado em fotografia de comida</p>
        </div>

        <!-- Adicione mais profissionais conforme necessário -->
      </div>
    </section>

  </main>
  <RouterView />
</template>
<style scoped>
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

