
const password = document.querySelector(".password"),
textpassword = "lhasin12345",
button = document.querySelector(".button");

button.addEventListener("click",()=>{
    if (textpassword === password.value){
            window.location.href = "../crud.html";
    }

    
})

