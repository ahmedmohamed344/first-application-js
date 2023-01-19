let username = document.querySelector("#username")
let email = document.querySelector("#email")
let password = document.querySelector("#password")
let registerBtn = document.querySelector("#sign-up")

registerBtn.addEventListener("click" , function(k){
    k.preventDefault()
    if(username.value === "" || email.value === "" ||  password.value === ""){
        alert("Please Fill Data , or i will hack you")
    } else {
        localStorage.setItem( "username", username.value)
        localStorage.setItem("email" , email.value)
        localStorage.setItem("password" , password.value)
    

    setTimeout(function(){
        window.location = "login.html"
    } , 2000)

    }

})










































