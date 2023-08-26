<template>
    <footer class="sticky-bottom site-footer">
      <nav class="footer-navbar">
        <div class="footer-container">
          <!-- Informações de Contato -->
          <div class="contact-info">
            <h3>Contato</h3>
            <p><strong>Telefone:</strong> +55 (47) 99999-9999</p>
            <p><strong>Email:</strong> contato@fotographx.com</p>
            <p><strong>Endereço:</strong> 123 Rua Fotografia, Cidade Luz</p>
          </div>
  
          <!-- Redes Sociais -->
          <div class="social-media">
            <h3>Redes Sociais</h3>
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">Twitter</a>
          </div>
  
          <!-- Links Rápidos -->
          <div class="quick-links">
            <h3>Links Rápidos</h3>
            <RouterLink to="/sobre">Sobre Nós</RouterLink>
            <RouterLink to="/servico">Serviços</RouterLink>
            <RouterLink to="/contato">Contato</RouterLink>
          </div>
        </div>
      </nav>
  
      <!-- Copyright -->
      <div class="copyright">
        <p>&copy; 2023 Fotographx. Todos os direitos reservados.</p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    // Seu script aqui, se necessário
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700&display=swap');
  
  * {
    font-family: 'Raleway', sans-serif;
  }
  
  .sticky-bottom {
    position: relative;
    width: 100%;
    bottom: 0;
  }
  
  .footer-navbar {
    color: #d4a373;  
    padding: 20px 0;
    width: 100%;
  }
  
  .footer-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    width: 100%;
    color: #d4a373; 
  }
  
  .contact-info, .social-media, .quick-links {
    flex: 1;
    margin: 0 10px;
  }
  
  h3 {
    margin-bottom: 20px;
  }
  
  a, RouterLink {
    display: block;
    margin-bottom: 10px;
    color: #d4a373; 
    text-decoration: none;
  }

  .copyright {
    text-align: center;
    color: #d4a373;  
    margin-top: 20px;
  }
  </style>
  
