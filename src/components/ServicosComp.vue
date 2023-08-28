<template>
    <main>
    <section class="services-section">
      <h1>Nossos Serviços</h1>
      <p class="services-intro">Na Fotographx, oferecemos mais do que apenas fotografia. Explore nossos pacotes abaixo para encontrar a melhor solução para o seu evento especial.</p>

      <div class="packages-container">
        <!-- Pacotes de Fotografia -->
        <div class="package-card">
          <h2 class="package-title">Pacote Básico de Fotografia</h2>
          <p>Este pacote inclui fotografia básica para pequenos eventos e sessões de retratos.</p>
          <strong>Preço: $300</strong>
          <button class="choose-package">Escolher Pacote</button>
        </div>

        <div class="package-card">
          <h2 class="package-title">Pacote Premium de Fotografia</h2>
          <p>Este pacote inclui serviços de fotografia avançada, adequados para grandes eventos e casamentos.</p>
          <strong>Preço: $600</strong>
          <button class="choose-package">Escolher Pacote</button>
        </div>

        <!-- Pacote de Organização de Eventos -->
        <div class="package-card">
          <h2 class="package-title">Pacote Completo: Fotografia + Organização de Eventos</h2>
          <p>Este é o nosso pacote mais completo. Além de nossa fotografia de alta qualidade, também cuidamos de toda a organização do seu evento, desde o planejamento até a execução.</p>
          <strong>Preço: $1200</strong>
          <button class="choose-package">Escolher Pacote</button>
        </div>
      </div>

      <!-- Pacote Deluxe -->
      <div class="package-card deluxe">
        <h2 class="package-title">Pacote Deluxe: Tudo Incluso + Extras Exclusivos</h2>
        <p>Este pacote oferece uma experiência inigualável. Inclui todos os serviços dos pacotes anteriores, mais um fotógrafo adicional, um videomaker, e um coordenador de eventos pessoal. Também vem com uma sessão de fotos pré-evento e um álbum de luxo personalizado.</p>
        <strong>Preço: $2500</strong>
        <button class="choose-package">Escolher Pacote</button>
      </div>
    </section>
  </main>
</template>


<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700&display=swap');

* {
font-family: 'Raleway', sans-serif;
}
.services-section {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.services-intro {
  margin-bottom: 30px;
}

.packages-container {
  display: flex;
  justify-content: space-between;
}

.package-card {
  flex: 1;
  margin: 0 10px;
  padding: 20px;
  border: 1px solid #d4a373;
  border-radius: 10px;
  text-align: center;
}

.package-title {
  min-height: 60px; 
  margin: 0 0 10px;
}

.package-card p {
  margin: 10px 0;
}

.package-card strong {
  display: block;
  margin-top: 10px;
}

.deluxe {
  margin-top: 40px;
  background-color: #f9f4e3;
  border: 2px solid #d4a373;
}

.choose-package {
    margin-top: 15px;
    padding: 10px 20px;
    background-color: #d4a373;
    border: none;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .choose-package:hover {
    background-color: #bf8f61; 
  }

</style>
