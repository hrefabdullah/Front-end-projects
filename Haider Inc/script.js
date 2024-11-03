const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('#register-link');
const loginLink = document.querySelector('#login-link');
const closeBtn = document.querySelector('.closebtn')
const loginBtn = document.querySelector('.btnlogin')

registerLink.addEventListener('click', ()=>{
    wrapper.classList.add('active')
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

loginBtn.addEventListener('click', ()=> {
    wrapper.classList.add('popup')
})

closeBtn.addEventListener('click', ()=> {
    wrapper.classList.remove('popup')
})