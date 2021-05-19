let buttonAdmin= document.getElementById('buttonAdmin')
let login = document.getElementById('login')
let register = document.getElementById('register')
let logout = document.getElementById('logout')

let status = function(status){
    if(status== null){
        buttonAdmin.style.display = 'none'
        logout.style.display = 'none'
    } else {
        if(status == 1){
            buttonAdmin.style.display = 'none'
            login.style.display = 'none'
            register.style.display = 'none'
        }else{
            if(status==2){
                login.style.display = 'none'
                register.style.display = 'none'     
            }
        }
    }
}

let role = req.session.usuario.role
console.log(role)
status(role)
