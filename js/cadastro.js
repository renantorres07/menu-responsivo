let btn = document.querySelector('.fa-eye')

let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let sobrenome = document.querySelector('#sobrenome')
let labelSobrenome = document.querySelector('#labelSobrenome')
let validSobrenome = false

let email = document.querySelector('#email')
let labelEmail = document.querySelector('#labelEmail')
let validEmail = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')

nome.addEventListener('keyup', () => {
    if (nome.value.length <= 2) {
        labelNome.setAttribute('style', 'color: red')
        labelNome.innerHTML = 'Nome * Insira no mínimo 3 caracteres'
        nome.setAttribute('style', 'border-color: red')
        validNome = false
    } else {
        labelNome.innerHTML = 'Nome'
        validNome = true
    }
})

sobrenome.addEventListener('keyup', () => {
    if (sobrenome.value.length <= 3) {
        labelSobrenome.setAttribute('style', 'color: red')
        labelSobrenome.innerHTML = 'Sobrenome * Insira no mínimo 3 caracteres'
        sobrenome.setAttribute('style', 'border-color: red')
        validSobrenome = false
    } else {
        labelSobrenome.innerHTML = 'Sobrenome'
        validSobrenome = true
    }
})

email.addEventListener('keyup', () => {
    if (email.value.length <= 3) {
        labelEmail.setAttribute('style', 'color: red')
        labelEmail.innerHTML = 'Email * Insira um email válido'
        email.setAttribute('style', 'border-color: red')
        validEmail = false
    } else {
        labelEmail.innerHTML = 'Email'
        validEmail = true
    }
})

senha.addEventListener('keyup', () => {
    if (senha.value.length <= 5) {
        labelSenha.setAttribute('style', 'color: red')
        labelSenha.innerHTML = 'Senha * Insira no minimo 6 caracteres'
        senha.setAttribute('style', 'border-color: red')
        validSenha = false
    } else {
        labelSenha.innerHTML = 'Senha'
        validSenha = true
    }
})

function cadastrar() {
    if (validNome && validSobrenome && validEmail && validSenha) {
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

        listaUser.push(
            {
                nomeCad: nome.value,
                sobrenomeCad: sobrenome.value,
                senhaCad: senha.value
            }
        )

        localStorage.setItem('listaUser', JSON.stringify(listaUser))

        msgSuccess.setAttribute('style', 'display: block')
        msgSuccess.innerHTML = '<strong>Cadastrando usuário...</strong>'
        msgError.setAttribute('style', 'display: none')
        msgError.innerHTML = ''

    } else {
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de cadastrar</strong>'
        msgSuccess.innerHTML = ''
        msgSuccess.setAttribute('style', 'display: none')
    }
}

btn.addEventListener('click', () => {
    let inputSenha = document.querySelector('#senha')

    if (inputSenha.getAttribute('type') == 'password') {
        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
    }
})

