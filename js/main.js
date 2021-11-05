
const buttonAuth = document.querySelector('.button-auth')
const buttonOut = document.querySelector('.button-out')
const modalAuth = document.querySelector('.modal-auth')
const closeAuth = document.querySelector('.close-auth')


const userName = document.querySelector('.user-name')

const buttonLogin = document.querySelector('.button-login')
const logInForm = document.getElementById('logInForm')

let login = document.getElementById('login');
let password = document.getElementById('password');

buttonAuth.addEventListener('click', ()=> {
    modalAuth.style.display = 'flex'
})

closeAuth.addEventListener('click',()=>{
    modalAuth.style.display = 'none'
})

logInForm.addEventListener('submit', (env)=>{
    env.preventDefault()
    modalAuth.style.display = 'none'
    if ((login.value).trim() == '') {
        alert('Введите логин')
    } else {
        let user = {
            log: login.value,
            pass: password.value
        }
        localStorage.setItem('user', JSON.stringify(user))
        nameUser(user)
    }

})

function nameUser(user) {
    console.log(name)
    userName.style.display = 'block'
    userName.textContent = user.log
    buttonOut.style.display = 'block'
    buttonAuth.style.display = 'none'
}
buttonOut.addEventListener('click', ()=>{
    userName.style.display = 'none'
    userName.textContent = ''
    buttonOut.style.display = 'none'
    buttonAuth.style.display = 'block'
    localStorage.removeItem('user')
})

if (localStorage.getItem('user')){
    console.log(JSON.parse(localStorage.getItem('user')))
    let obj = JSON.parse(localStorage.getItem('user'))
    nameUser(obj)
}
