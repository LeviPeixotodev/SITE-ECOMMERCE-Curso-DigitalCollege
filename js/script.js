let botao=document.querySelector('#botaodasenhajs')
let input=document.querySelector('#inputpasswordjs')
let olho=document.querySelector('#olho')

function ver_senha(){
    if (input.type === 'password') {
        input.type='text'
        olho.src = './assets/icons/versenha.svg'
    }else{
        input.type = 'password'
        olho.src='./assets/icons/naoversenha.svg'
    }
}

botao.addEventListener('click', ver_senha)

let botaodark=document.querySelector('#botaodarkmode')

function darkmode(){
    document.body.classList.toggle('mododark')
}

botaodark.addEventListener('click', darkmode)