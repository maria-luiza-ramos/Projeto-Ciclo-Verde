document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const verifyLoggedUser = ()=>{
    const user = localStorage.getItem("user");

    const loginButton = document.getElementById("go-to-login")
    const userDisplay = document.getElementById("show-logged-user")
    const username = document.getElementById("username")
    const subscribeButton = document.getElementById("subscribe")

    if(user){
        userDisplay.style.display= "block";
        subscribeButton ? subscribeButton.style.display = "none" : undefined;
        username.innerText = user;
    }else{
        loginButton.style.display="block";
    }
}
verifyLoggedUser()


window.onload = ()=>{

    const logoffButton  = document.getElementById("logoff");

    logoffButton.addEventListener("click", (evt)=>{
        evt.preventDefault();
        localStorage.clear();
        window.location.replace("./index.html")
    })
}