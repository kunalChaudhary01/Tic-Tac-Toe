let input=document.querySelector("#input-box")
let btn=document.querySelector("#add-btn")
let ul=document.querySelector("#list-continer")
btn.addEventListener("click",function(){
    
    if(input.value != ""){
        let task=document.createElement("li")
        let btnn=document.createElement("button")
        let checkbox=document.createElement("input")
        let div1=document.createElement("div")
        let div2=document.createElement("div")
        checkbox.type="checkbox"
        checkbox.id = 'dynamicCheckbox'
        task.innerText=input.value
        btnn.innerText="x"
        btnn.classList.add("deletebtn")
        div1.classList.add("div1")
        div2.classList.add("div2")
        div1.append(checkbox)
        div1.append(task)
        div2.appendChild(div1)
        div2.appendChild(btnn)
        ul.appendChild(div2)
        
    }
    input.value=""
    saveData()
})

ul.addEventListener("click",function(event){
    // let checkboxes=event.getElementById("dynamicCheckbox");
    // tick=event

    if(event.target.nodeName == "BUTTON"){
        let item = event.target.parentElement;
        item.remove()
        saveData()
    }
    if (event.target.id == "dynamicCheckbox"){
        if (event.target.checked) {
            event.target.nextSibling.classList.add("font")
            saveData()
        } 
        else {
            event.target.nextSibling.classList.remove("font")
            saveData()
        }
        
    }
})

// for storing
function saveData(){
    localStorage.setItem("data",ul.innerHTML);
}

function showTask(){
    ul.innerHTML= localStorage.getItem("data");
}
showTask();