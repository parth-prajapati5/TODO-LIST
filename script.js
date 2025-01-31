let inputtext=document.querySelector("#input");
let btn=document.querySelector("#btn");
let box=document.querySelector(".box");
function addtask(){
  if(inputtext.value==''){
    alert("Please Enter Task");
  }
  else{
    let li=document.createElement("li");
    li.innerHTML=inputtext.value;
    li.classList.add("li");
    box.appendChild(li);
    let canlce=document.createElement("span");
    canlce.classList.add("span");
    li.appendChild(canlce);
  }
  inputtext.value="";
  savedata();
}

btn.addEventListener("click",()=>{
    addtask();
})
box.addEventListener("click",(e)=>{
     if(e.target.tagName === "LI"){
        e.target.classList.toggle("check");
        savedata();
     }
     else{
       if( e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata();
       }
     }
},false);

function savedata(){
    localStorage.setItem("data",box.innerHTML);
}

function showdata(){
    box.innerHTML=localStorage.getItem("data");
}

showdata();