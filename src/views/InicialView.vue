<script setup>
  import ImagemComp from "@/components/ImagemComp.vue";
</script>

<template>
  <main>
    <div class="carousel-section">
      <div id="carouselExampleAutoplaying" class="carousel main" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="@/assets/imagens/3.jpg" class="d-block w-100" alt="" />
          </div>
          <div class="carousel-item">
            <img src="@/assets/imagens/dog.jpg" class="d-block w-100" alt="" />
          </div>
          <div class="carousel-item">
            <img src="@/assets/imagens/1.jpg" class="d-block w-100" alt="" />
          </div>
        </div>
        <button
          class="carousel-control-prev styled-button"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next styled-button"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <p class="carousel-desc">Explore nosso portfólio diversificado e descubra a qualidade que podemos trazer ao seu evento.</p>
    </div>

    <div class="container">
      <h2 class="section-title">Destaques</h2>
      <div class="additional-container">
        <div class="additional-item"><ImagemComp /></div>
        <div class="additional-item"><ImagemComp /></div>
        <div class="additional-item"><ImagemComp /></div>
      </div>

      <h2 class="section-title">Recentes</h2>
      <div class="xd-container">
        <div class="bottom-i"><ImagemComp /></div>
        <div class="bottom-i"><ImagemComp /></div>
        <div class="bottom-i"><ImagemComp /></div>
      </div>

      <h2 class="section-title">Depoimentos</h2>
      <div class="testimonials">
        <blockquote>"O serviço foi excelente!"</blockquote>
        <blockquote>"Fotos maravilhosas, equipe incrível!"</blockquote>
        <blockquote>"Valeu cada centavo!"</blockquote>
      </div>
    </div>
  </main>
</template>


<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700&display=swap');

  * {
    font-family: 'Raleway', sans-serif;
  }

  .container {
    max-width: none;
    width: 100%;
    background-color: #fff;
  }

  .additional-container {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }

  .additional-item {
    width: calc(33.33% - 10px);
    padding: 10px;
    text-align: center;
  }

  .bottom-container {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }

  .bottom-item {
    width: 220px;
    border: 1px solid #ccd5ae;
    padding: 10px;
    text-align: center;
    overflow: hidden;
    display: flex;
  }

  .bottom-item img {
    width: 220px;
  }

  .xd-container {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }

  .bottom-i {
    width: calc(33.33% - 10px);
    padding: 10px;
    text-align: center;
  }

  .carousel-inner {
    height: 300px;
  }

  .carousel-inner img {
    height: 100%;
    object-fit: cover;
  }

  .carousel-section {
    text-align: center;
  }

  .carousel-desc {
    margin-top: 10px;
    color: #555;
  }

  .section-title {
    text-align: center;
    margin-top: 20px;
    font-weight: bold;
  }

  .testimonials {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    background-color: #FFF;
    border-radius: 8px;
  }

  blockquote {
    font-size: 18px;
    font-style: italic;
    padding: 10px;
    border-left: 4px solid #ccd5ae;
    margin: 10px;
  }

  .styled-button {
    background-color: #ccd5ae;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  .styled-button:hover {
    background-color: #ccd5ae;
  }
</style>
