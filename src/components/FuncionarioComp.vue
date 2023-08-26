<template>
    <section class="professionals-section">
      <h2>Nossos Profissionais</h2>
      <div class="professionals-grid">
        <div class="professional-card">
          <h3>Nome do Profissional 1</h3>
          <p>Especializado em fotografia de casamento</p>
          <img src="@/assets/imagens/7.jpg" alt="Profissional 6" />
        </div>

        <div class="professional-card">
          <h3>Nome do Profissional 2</h3>
          <p>Especializado em retratos e fotografia de família</p>
          <img src="@/assets/imagens/7.jpg" alt="Profissional 6" />
        </div>

        <div class="professional-card">
          <h3>Nome do Profissional 3</h3>
          <p>Especializado em fotografia de natureza</p>
          <img src="@/assets/imagens/7.jpg" alt="Profissional 6" />
        </div>

        <div class="professional-card">
          <h3>Nome do Profissional 4</h3>
          <p>Especializado em fotografia de eventos corporativos</p>
          <img src="@/assets/imagens/7.jpg" alt="Profissional 6" />
        </div>

        <div class="professional-card">
          <h3>Nome do Profissional 5</h3>
          <p>Especializado em fotografia de paisagens urbanas</p>
          <img src="@/assets/imagens/7.jpg" alt="Profissional 6" />
        </div>

        <div class="professional-card">
          <h3>Nome do Profissional 6</h3>
          <p>Especializado em fotografia de comida</p>
          <img src="@/assets/imagens/7.jpg" alt="Profissional 6" />
        </div>
      </div>
    </section>
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
