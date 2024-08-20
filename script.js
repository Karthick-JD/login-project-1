const wrapper = document.querySelector(".wrapper")
const loginLink = document.querySelector(".login-link")
const registerLink = document.querySelector(".register-link")

const login = document.querySelector(".login-form")
const register = document.querySelector(".register-form")

registerLink.addEventListener('click', function(){
    wrapper.classList.add('active')
    login.reset();
})

loginLink.addEventListener('click', function(){
    wrapper.classList.remove('active')
    register.reset();
})

const loginBtn = document.querySelector(".log-in")
const closeBtn = document.querySelector(".icon-close")

loginBtn.addEventListener("click", function(){
    wrapper.style.transform = 'scale(1)'
})

closeBtn.addEventListener("click", function(){
    wrapper.style.transform = 'scale(0)'
    wrapper.classList.remove('active')
    login.reset()
    register.reset()
})
