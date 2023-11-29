const loginEventListener = ()=>{
    const loginInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");

    if(loginInput.value && passwordInput.value){
        localStorage.setItem("user",loginInput.value)
        window.location.replace("./index.html")
    }
}

window.onload = ()=>{
    const loginButton = document.getElementById("login-button-click");

    if(loginButton){
        loginButton.addEventListener("click",loginEventListener)
    }

}