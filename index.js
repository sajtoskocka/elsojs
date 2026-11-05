const cimElem = document.getElementById("cim");
cimElem.textContent = "kedvencek";
 
let gyumolcs = document.querySelectorAll(".gyumolcs");
gyumolcs[0].textContent = "Alma";
 
gyumolcs[1].textContent=gyumolcs[2].textContent
 
let divElem=document.getElementById("uzenet")
divElem.addEventListener("click",beIr)
 
function beIr(){
    let felsElem=document.getElementById("felsorolas")
    let inputElem=document.getElementById("kedvenc")
    let ertek = inputElem.value
    felsElem.insertAdjacentHTML("beforeend", `<li class='gyumolcs'>${ertek}</li>`);
 
}