const button = document.querySelector(".colors_news");

// arr


function getcolors(string){
   let hexString = '';
   for(let i = 0 ; i < string ; i++){
     hexString +=getrandom();
   }
   return hexString;
}
function getrandom(){
    const arrs = ['1','2','3','4','5','6','7','8','9','A','B','B','C','D','E','F'];
    const random = Math.floor(Math.random() * arrs.length)
    const randomvalue = arrs[random];
    return randomvalue;
}
button.addEventListener("click",()=>{
    const randamString = '#'+getcolors(6);
    document.body.style.backgroundColor=randamString;
})