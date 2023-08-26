<template>
  <main>
    <section class="contact-section">
      <h1>Contatos</h1>
      <p class="contact-intro">Quer entrar em contato conosco? Preencha o formulário abaixo e responderemos o mais rápido possível.</p>

      <form class="contact-form" >
        <div class="input-group">
          <label for="name">Nome:</label>
          <input type="text" id="name" placeholder="Lucas Martins" required />
        </div>

        <div class="input-group">
          <label for="email">E-mail:</label>
          <input type="email" id="email" placeholder="lucasM@gmail.com"  required />
        </div>

        <div class="input-group">
          <label for="subject">Assunto:</label>
          <input type="text" id="subject" placeholder="Casamento, retratos, eventos, etc" required />
        </div>

        <div class="input-group">
          <label for="message">Mensagem:</label>
          <textarea id="message" rows="5" required></textarea>
        </div>

        <button type="submit">Enviar</button>
      </form>
    </section>
  </main>
  <RouterView />
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700&display=swap');

* {
font-family: 'Raleway', sans-serif;
}

.contact-section {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.contact-intro {
  margin-bottom: 20px;
}

.contact-form {
  margin-top: 20px;
}

.input-group {
  margin-bottom: 15px;
}

.input-group label {
  display: block;
  margin-bottom: 5px;
}

.input-group input,
.input-group textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
}

button {
  padding: 10px 20px;
  background-color: #d4a373;
  border: none;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #b87f61;
}
</style>
