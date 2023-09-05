<template>
    <div class="container">
        <h1>Registro e Login</h1>
        <div class="forms-container">
            <div class="form-wrapper">
                <h2>Registro de Fotógrafo</h2>
                <form @submit.prevent="registerPhotographer">
                    <input type="text" placeholder="Nome" v-model="photographer.name" required />
                    <input type="email" placeholder="Email" v-model="photographer.email" required />
                    <input type="text" placeholder="Telefone" v-model="photographer.phone" required />
                    <input type="text" placeholder="Username" v-model="photographer.username" required />
                    <input type="password" placeholder="Senha" v-model="photographer.password" required />
                    <input type="date" placeholder="Data de Nascimento" v-model="photographer.birthdate" required />
                    <input type="text" placeholder="Localidade" v-model="photographer.location" required />
                    <button type="submit">Registrar</button>
                </form>
            </div>

            <div class="form-wrapper">
                <h2>Registro de Cliente</h2>
                <form @submit.prevent="registerClient">
                    <input type="text" placeholder="Nome" v-model="client.name" required />
                    <input type="email" placeholder="Email" v-model="client.email" required />
                    <input type="text" placeholder="Telefone" v-model="client.phone" required />
                    <input type="text" placeholder="Username" v-model="client.username" required />
                    <input type="password" placeholder="Senha" v-model="client.password" required />
                    <input type="date" placeholder="Data de Nascimento" v-model="client.birthdate" required />
                    <input type="text" placeholder="Localidade" v-model="client.location" required />
                    <button type="submit">Registrar</button>
                </form>
            </div>

            <div class="form-wrapper">
                <h2>Login</h2>
                <form @submit.prevent="login">
                    <input type="text" placeholder="Username" v-model="loginData.username" required />
                    <input type="password" placeholder="Senha" v-model="loginData.password" required />
                    <RouterLink to="/"><button type="submit">Login</button></RouterLink>
                </form>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import { ref } from 'vue';

const photographer = ref({
    name: '',
    email: '',
    phone: '',
    username: '',
    password: '',
    birthdate: '',
    location: '',
});

const client = ref({
    name: '',
    email: '',
    phone: '',
    username: '',
    password: '',
    birthdate: '',
    location: '',
});

const loginData = ref({
    username: '',
    password: '',
});

function registerPhotographer() {
    // Implemente a lógica de registro para fotógrafos aqui
    console.log('Dados do fotógrafo:', photographer.value);
}

function registerClient() {
    // Implemente a lógica de registro para clientes aqui
    console.log('Dados do cliente:', client.value);
}

function login() {
    // Implemente a lógica de login aqui
    console.log('Dados de login:', loginData.value);
}
</script>
  
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
    width: calc(33.33% - 10px);
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
