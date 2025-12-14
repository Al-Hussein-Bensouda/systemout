

const button_delete = document.querySelectorAll(".outputs .tbody .delete"),
all_utr = document.querySelectorAll(".outputs .tbody .nameproduct")

all_date = JSON.parse(localStorage.product);

// document.querySelectorAll(".tbody tr").forEach(element=>{
//     element.querySelectorAll('td').forEach(elements=>{
//        elements.querySelector(".delete").addEventListener("click",()=>{
//         console.log("element:"+elements)
//        })
//     })
// })
console.log(forEach())
button_delete.forEach(element =>{ 
    console.log(element.className.valueOf())
    element.addEventListener("click",()=>{
       console.log(button_delete.querySelector(".tbody"))
    })
})

function forEach(){
    const tbody = document.querySelectorAll(".tbody tr");
       let returns;
    for (let i = 0; i < tbody.length; i++) {
        const element  = tbody[i].querySelectorAll("td");
        for (let s = 0; s < element.length; s++) {
            // element[s].querySelector(".delete").addEventListener("click",()=>{
            //      console.log("element:"+element)
            // })
            // element[s].querySelector(".delete").onclick = function(){
            //      console.log(element[s].querySelector(".delete"))
            // }
            returns = element[s].querySelector(".delete");
            
        }
    }
    return returns;
}



