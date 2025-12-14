
const serachTitle = document.getElementById("serachTitle"),
serachTCatego = document.getElementById("serachTCatego"),
inputserach = document.getElementById("serach"),
all_date = JSON.parse(localStorage.product),
tbodyserch = document.getElementById("tbodyserch"),
dont_serch = document.querySelector(".dont_serch"),
icon_cancel = document.querySelector(".icon_cancel");
let namestemp;
 let tempdate;
console.log(all_date)


serachTitle.addEventListener("click",()=>{
    serachname(inputserach.value);
    testall(inputserach.value)
    namestemp+=inputserach.value;
    if(serachname(inputserach.value) === false){
        dont_serch.classList.remove("none");
        icon_cancel.classList.add("none");
        document.querySelector("table").classList.add("none");
        setTimeout(timeall,800);
        inputserach.value = "";
        
    }

});
icon_cancel.addEventListener("click",()=>{
      icon_cancel.classList.add("none");
      document.querySelector("table").classList.add("none");
      remove_container(namestemp);
      tbodyserch.removeChild();
})

function serachname(name){
    let boolean = false;
    for (let i = 0; i < all_date.length; i++) {
        const element = all_date[i];
        if(all_date[i].title.length === name.length){
        if(all_date[i].title === name){
            tbodyserch.innerHTML +=  '<tr><td>'+i+'</td><td class ="nameproduct">'+dataPro[i].title+'</td><td>'+dataPro[i].price+'</td><td>'+dataPro[i].taxes+'</td><td>'+dataPro[i].ads+'</td><td>'+dataPro[i].discount+'</td><td>'+dataPro[i].total+'</td><td>'+dataPro[i].total+'</td><td>'+dataPro[i].all_date+'</td><td><button id="update" onclick="updateData("mpm")>update</button></td><td><button id="delete" class="delete'+dataPro[i].total+'">delete</button></td></tr> ';
            document.querySelector("table").classList.remove("none");
            icon_cancel.classList.remove("none");
            dont_serch.classList.add("none");
            i++;
            boolean = true;
        }
    }
        // else{
        //     dont_serch.classList.remove("none");
        //     icon_cancel.classList.add("none");
        //     document.querySelector("table").classList.add("none");
        //     setTimeout(timeall,800);
        //     inputserach.value = "";
        //     i++;
        // }
    }
    return boolean;
}

function timeall(){
    dont_serch.classList.add("none")
}
// onclick icon cancel
function remove_container(name){
    for (let i = 0; i < all_date.length; i++) {
        
        if(all_date[i].title === name){
             tbodyserch.innerHTML +=  '<tr></tr>';
        }
    }
}

function testall(name){
    for (let i = 0; i < all_date.length; i++) {
          if (all_date[i].title === name) {
            let newPro = {
               title:all_date[i].title,
               price:all_date[i].count,
               taxes:all_date[i].count,
               ads:all_date[i].count,
              discount:all_date[i].count,
             total:all_date[i].count,
             count:all_date[i].count,
            category:all_date[i].count,
    } 
      tempdate.push(newPro);
             
            
          }
           localStorage.setItem("producttest",JSON.stringify(tempdate));
        
    }

}

