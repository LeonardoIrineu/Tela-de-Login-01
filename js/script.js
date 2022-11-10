let btnEntrar = document.querySelector('#entrar-js')
let btnNovaConta = document.querySelector('#nova-conta-js')
let body = document.querySelector('body')

btnEntrar.addEventListener('click', function () {
    body.className = 'entrar-js'
})

btnNovaConta.addEventListener('click', function () {
    body.className = 'nova-conta-js'
})