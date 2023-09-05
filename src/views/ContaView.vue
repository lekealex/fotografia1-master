<template>
    <div class="container">
        <div class="forms-container">
            <div class="form-wrapper">
                <h2>Registro de Fotógrafo</h2>
                <form>
                    <input type="text" placeholder="Nome" />
                    <input type="email" placeholder="Email"/>
                    <input type="text" placeholder="Telefone" />
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Senha" />
                    <input type="date" placeholder="Data de Nascimento" />
                    <input type="text" placeholder="Localidade" />
                    <button type="submit">Registrar</button>
                </form>
            </div>

            <div class="form-wrapper">
                <h2>Registro de Cliente</h2>
                <form>
                    <input type="text" placeholder="Nome" />
                    <input type="email" placeholder="Email" />
                    <input type="text" placeholder="Telefone"  />
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Senha" />
                    <input type="date" placeholder="Data de Nascimento" />
                    <input type="text" placeholder="Localidade" />
                    <button type="submit">Registrar</button>
                </form>
            </div>

            <div class="form-wrapper">
                <h2>Login</h2>
                <form>
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Senha" />
                    <RouterLink to="/"><button type="submit">Login</button></RouterLink>
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
