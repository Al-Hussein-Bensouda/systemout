let title = document.getElementById("title");
let price = document.getElementById("price");
let taxes = document.getElementById("taxes");
let ads = document.getElementById("ads");
let discount = document.getElementById("discount");
let count = document.getElementById("count");
let total = document.getElementById("total");
let category = document.getElementById("category");
let submit = document.getElementById("submit");

let mood = "create";
let tmp;

// all time
const date = new Date(),
month = date.getMinutes();
let months = date.toLocaleString("en",{
    month:"long" 
});
let weekday = date.toLocaleString("en",{
    weekday:"long" 
});
let alldate = date.getDate()+'/'+date.getFullYear()+'/'+months+'/'+weekday;
// TEST CONSOLE
console.log(weekday.includes("Wednesday"));

inputs_title();

// select smaill
function getTotal(){
    if(price.value != ''){
        let result = (+price.value + +taxes.value+ +ads.value) - +discount.value;
        total.innerHTML = result;
        total.style.background="#040";
    }else{
        total.innerHTML = '';
        total.style.background="#a00d02";
    }
}

// في شك سوف يتم حدفها
submit.addEventListener("click",()=>{
    const error_title = document.querySelector(".error_title"),
    error_category = document.querySelector(".error_category");
    if(title.value.length >= 1){
        console.log("delet_toggle")
        if(category.value.length >=1){
             submit_onclick();
        }else{
            error_category.textContent="الملاء الفرغ";
            category.classList.add("error_input");
            category.focus();
        }
    }else{
        title.classList.add("error_input");
        error_title.textContent="الملاء الفرغ";
        title.focus();
    }
    total.textContent= "";
   
})

// function add arr newPro in localStorage
function submit_onclick(){
let newPro = {
        title:title.value,
        price:price.value,
        taxes:taxes.value,
        ads:ads.value,
        discount:discount.value,
        total:total.innerText,
        count:count.value,
        category:category.value,
        all_date:alldate 
    }
    if (mood === "create"){
    if (newPro.count > 1){
        for (let i = 0; i < newPro.count; i++) {
             dataPro.push(newPro);
    }
    }else{
        dataPro.push(newPro);
    }
    }else{
        dataPro[tmp] = newPro;
        mood = "create";
        submit.innerHTML = "create";
        count.style.display = "block";
    }

    localStorage.setItem("product",JSON.stringify(dataPro));
    clearData();
    showData();
}
// create product 
let dataPro;

if (localStorage.product != null){
    dataPro = JSON.parse(localStorage.product);
}else{
 dataPro=[];
}   
// clear all inputes 
function clearData(){
    title.value = '';
    price.value = '';
    taxes.value = '';
    ads.value = '';
    discount.value ='';
    total.valuet= '';
    count.value= '';
    category.value = '';

}
// show all data dcoument
function showData(){
    getTotal();
    let table = '';
    let delet = '';
    let testtemp;
    let num = 0;

     for(let i = 0 ; i < dataPro.length ; i++){
        num=i+1;
         table += '<tr><td>'+num+'</td><td class ="nameproduct">'+dataPro[i].title+'</td><td>'+dataPro[i].price+'</td><td>'+dataPro[i].taxes+'</td><td>'+dataPro[i].ads+'</td><td>'+dataPro[i].discount+'</td><td>'+dataPro[i].total+'</td><td>'+dataPro[i].category+'</td><td class="date">'+dataPro[i].all_date+'</td><td><button id="update" onclick = "updateData('+i+')">update</button></td><td><button id="delete" onclick="deletedata('+i+')" class="delete">delete</button></td></tr> ';
     }
    document.getElementById("tbody").innerHTML = table;
    let btndelet = document.getElementById("deleteAll");

    if(dataPro.length > 0){
        btndelet.innerHTML = '<button id="deletallelement">مسح لكل('+dataPro.length+')</button>';
        document.getElementById('deletallelement').addEventListener("click",()=>{
            deleteAll();
        })
    }else{
         btndelet.innerHTML = ''
    }
}

showData();

// for (let i = 0; i < dataPro.length; i++) {
     
// }
// delete
function deletedata(i){
   dataPro.splice(i,1);
   localStorage.product = JSON.stringify(dataPro);
   showData();
}

// delete all data 
function deleteAll(){
    localStorage.clear();
    dataPro.splice(0);
    showData();
}
// select updata onclick button
function updateData(i){
   title.value = dataPro[i].title;
   price.value = dataPro[i].price;
   taxes.value = dataPro[i].taxes;
   ads.value = dataPro[i].ads;
   discount.value = dataPro[i].discount;
   count.style.display = "none";
   submit.innerHTML = "Update"
   getTotal();
   category.value = dataPro[i].category;
   mood = 'update';
   tmp = i;
   scroll({
    top:0,
    behavior:'smooth'
   })
}


// Seleect input remove docoment classList .error_input
function inputs_title(){
    const error_title = document.querySelector(".error_title"),
    error_category = document.querySelector(".error_category");
    title.addEventListener("input",()=>{
        error_title.textContent =""; 
        title.classList.remove("error_input");
    })
    category.addEventListener("input",()=>{
        category.classList.remove("error_input");
        error_category.textContent = "";
    })
}

let searchMood = 'title';

// select id tow button title and category
function getSearchMood(id){
    let search = document.getElementById('serach');
    if (id == "serachTitle") {
        searchMood = 'عن اسم المنتج';
    }else{
        searchMood = 'عن نوع المنتج';
    }
     search.placeholder = "البحث "+searchMood;
    search.focus();
    search.value = '';
    showData();
}
// Serach onkeyup inputr -- temp toLowerCase
function serachData(value){
   let table =''; 
   let num = 0;
    for (let i = 0; i < dataPro.length; i++) {

    if (searchMood  == "title") {
             num = i + 1;
             if (dataPro[i].title.includes(value)) {
                table += '<tr><td>'+num+'</td><td class ="nameproduct">'+dataPro[i].title+'</td><td>'+dataPro[i].price+'</td><td>'+dataPro[i].taxes+'</td><td>'+dataPro[i].ads+'</td><td>'+dataPro[i].discount+'</td><td>'+dataPro[i].total+'</td><td>'+dataPro[i].category+'</td><td>'+dataPro[i].all_date+'</td><td><button id="update" onclick = "updateData('+i+')">update</button></td><td><button id="delete" class="delete"  onclick="deletedata('+i+')">delete</button></td></tr> ';
             }
    }else{
              num = i + 1;
             if (dataPro[i].category.includes(value)) {
                table += '<tr><td>'+num+'</td><td class ="nameproduct">'+dataPro[i].title+'</td><td>'+dataPro[i].price+'</td><td>'+dataPro[i].taxes+'</td><td>'+dataPro[i].ads+'</td><td>'+dataPro[i].discount+'</td><td>'+dataPro[i].total+'</td><td>'+dataPro[i].category+'</td><td>'+dataPro[i].all_date+'</td><td><button id="update" onclick = "updateData('+i+')">update</button></td><td><button id="delete" class="delete"  onclick="deletedata('+i+')">delete</button></td></tr> ';
             }
    }
}
    document.getElementById("tbody").innerHTML = table;
}