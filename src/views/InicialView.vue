<template>
    <main>
    <div id="carouselExampleAutoplaying" class="carousel main" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="@/assets/imagens/1.jpg" class="d-block w-100" alt="" />
        </div>
        <div class="carousel-item">
          <img src="@/assets/imagens/2.jpg" class="d-block w-100" alt="" />
        </div>
        <div class="carousel-item">
          <img src="@/assets/imagens/3.jpg" class="d-block w-100" alt="" />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <div class="container">
     
      <div class="additional-container">
        <div class="additional-item"><img src="@/assets/imagens/download.jpeg" alt="" /></div>
        <div class="additional-item"><img src="@/assets/imagens/download.jpeg" alt="" /></div>
        <div class="additional-item"><img src="@/assets/imagens/download.jpeg" alt="" /></div>
      </div>

     
      <div class="bottom-container">
        <div class="bottom-item">
          <img src="@/assets/imagens/download.jpeg" alt="" />
          <span class="bottom-text">kfjaskjdfsajdkfjska</span>
        </div>
        <div class="bottom-item"><img src="@/assets/imagens/download.jpeg" alt="" /></div>
        <div class="bottom-item"><img src="@/assets/imagens/download.jpeg" alt="" /></div>
      </div>
      <div class="xd-container">
        <div class="bottom-i"><img src="@/assets/imagens/download.jpeg" alt="" /></div>
        <div class="bottom-i"><img src="@/assets/imagens/download.jpeg" alt="" /></div>
        <div class="bottom-i"><img src="@/assets/imagens/download.jpeg" alt="" /></div>
      </div>
    </div>
  </main>
</template>

<style scoped>

.container {
  max-width: none;
  width: 100%;
}

/* Estilos para a imagem */
.image-container {
  text-align: center;
  margin-top: 50px;
  border: 1px solid #ec0707; 
  padding: 10px;
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
  width: calc(33.33% - 10px); 
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
  width: 220px;
  border: 1px solid #012345;
  padding: 10px;
  text-align: center;
  overflow: hidden;
  display: flex;
}
.bottom-item:hover {
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
  width: calc(33.33% - 10px); 
  border: 1px solid #012345;
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

</style>
