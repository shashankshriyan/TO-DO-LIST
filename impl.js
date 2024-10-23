const input=document.getElementById("input-box");
const listContainer=document.querySelector(".list")
function addTasks(){
    if(input.value===""){
        alert("Enter something");

    }
    else{
        let li=document.createElement("li")
        li.innerHTML=input.value;
        listContainer.append(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7"
        li.appendChild(span);
        
    }
    input.value=""
    storage()
}

listContainer.addEventListener("click",(e)=>{
        if(e.target.tagName==="LI"){
            e.target.classList.toggle("checked");
            storage()
        }
        else if(e.target.tagName==="SPAN"){
            e.target.parentElement.remove()
            storage()
        }
        } );

function storage(){
         localStorage.setItem("data",listContainer.innerHTML);

        }
 function getData(){
        listContainer.innerHTML=localStorage.getItem("data");
        }
        getData();
      
