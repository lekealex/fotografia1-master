
<template>
    <div class="container">
      <div class="forms-container">
        <div class="form-wrapper">
          <h2>Fazer Reserva</h2>
          <form @submit.prevent="makeReservation">
            <input type="date" placeholder="Data" />
            <input type="time" placeholder="Horário" />
            <input type="text" placeholder="Local" />
            <input type="text" placeholder="Fotógrafo" />
            <select>
              <option disabled value="">Escolha um pacote</option>
              <option>Pacote Básico de Fotografia ($300)</option>
              <option>Pacote Premium de Fotografia ($600)</option>
              <option>Pacote Completo: Fotografia + Organização de Eventos ($1200)</option>
              <option>Pacote Deluxe: Tudo Incluso + Extras Exclusivos ($2500)</option>
            </select>
            <RouterLink to="/"><button type="submit">Reservar</button></RouterLink>
          </form>
        </div>
        <div class="form-wrapper">
          <h2>Cancelar Reserva</h2>
          <form @submit.prevent="cancelReservation">
            <input type="text" placeholder="ID da Reserva" />
            <RouterLink to="/"><button type="submit">Cancelar</button></RouterLink>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  .container {
    max-width: 800px;
    margin: auto;
    padding: 20px;
  }
  
  .forms-container {
    display: flex;
    justify-content: space-between;
  }
  
  .form-wrapper {
    width: calc(50% - 10px);
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 8px;
  }
  
  form {
    display: flex;
    flex-direction: column;
  }
  
  input {
    margin-bottom: 10px;
    padding: 8px;
  }
  
  button {
    padding: 10px;
    background-color: #d4a373;
    color: white;
    border: none;
    cursor: pointer;
    width: 100%;
  }
  </style>
  
