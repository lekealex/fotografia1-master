<template>
    <div class="image-wrapper">
      <img src="@/assets/imagens/ee257edfd43bd602d5da72730e7228c5.jpg" alt="" />
      <div class="overlay">
        <h4>Evento Especial</h4>
        <button>Ver Mais</button>
      </div>
    </div>
  </template>
  
  <style scoped>
  .image-wrapper {
    position: relative;
  }
  
  .overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    overflow: hidden;
    width: 100%;
    height: 0;
    transition: .5s ease;
  }
  
  .image-wrapper:hover .overlay {
    height: 100%;
  }
  
  .overlay h4 {
    color: white;
    font-size: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
  }
  
  .overlay button {
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    background-color: #555;
    color: white;
    padding: 12px 24px;
    font-size: 16px;
    cursor: pointer;
  }
  </style>
  
