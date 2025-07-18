let boxes =  document.querySelectorAll(".box")
let resetbtn = document.querySelector("#reset-btn")
let newgamebtn = document.querySelector("#New-btn")
let msgcont = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")
let turn = document.querySelector("#turn")
let music = new Audio("sound1.mp3")
let victory = new Audio("victory.mp3")

let turn0 = true; 
let count = 0;
turn.innerText=`Game Started !!  O's Turn!!`

const winPatterns = [
     [0,1,2],
     [0,3,6],
     [0,4,8],
     [1,4,7],
     [2,5,8],
     [2,4,6],
     [3,4,5],
     [6,7,8],
]
const paracall = () =>{
    if(count == 0){
        turn.innerHTML=`Game Started !!  O's Turn!!`
    }
    else if (turn0){
        turn.innerHTML=`O's Turn!!`
    }
    else{
        turn.innerHTML=`X's Turn!!`
    }
}

boxes.forEach((box) => {
    paracall();
    box.addEventListener("click",()=> {
        
        count++;
        if(turn0){
            box.innerHTML = "O"
            box.classList.add("o")
            turn0 = false;
            // box.style.color="#ff595e"
        }
        else{
            box.innerText = "X"
            box.classList.add("x")
            turn0 = true;
            //box.style.color="#3d348b"
        }
        box.disabled = true;
        music.play()
        paracall(count);
        let iswinner = checkwinner();
        
        if (count == 9 && !iswinner) {
            gameDraw();
            turn.innerText=""
        }
    })
}) 

const gameDraw = () => {
    msg.innerText = `Game Draw.`
    msgcont.classList.remove("hide")
    newgamebtn.classList.remove("hide")
    resetbtn.classList.add("hide")
    // disableBoxes();
};

const showWinner = (winner)=>{
    msg.innerHTML = `Winner is <b> "${winner}" </b>`
    msgcont.classList.remove("hide")
    newgamebtn.classList.remove("hide")
    resetbtn.classList.add("hide")
    
}

const disableboxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableboxes = () =>{
    for(let box of boxes){
        box.disabled = false;
    //     box.innerText=""
    }
}
const colour = (i) => {
    boxes[i[0]].classList.add("neon")
    boxes[i[1]].classList.add("neon")
    boxes[i[2]].classList.add("neon")

}

const checkwinner = () => {
    for(let i of winPatterns){
        let pos1 = boxes[i[0]].innerText;
        let pos2 = boxes[i[1]].innerText;
        let pos3 = boxes[i[2]].innerText;

        if( pos1 !="" && pos2 !="" && pos3 != ""){
            if(pos1 == pos2 && pos2 == pos3){
                colour(i);
                showWinner(pos1);
                disableboxes();
                turn.innerText=" "
                victory.play()
                return true
            }
        }
    }
}
const resetgame = () => {
    turn.innerText=`Game Started !!  O's Turn!!`
    turn0 = true;
    count = 0;
    enableboxes();
    for(let box of boxes){
        box.innerText=""
        box.classList.remove("x")
        box.classList.remove("o")
        box.classList.remove("neon")
    }
    msgcont.classList.add("hide")
    newgamebtn.classList.add("hide")
    resetbtn.classList.remove("hide")
    
    
}

//for reset
newgamebtn.addEventListener("click",()=>{
    resetgame();
})
resetbtn.addEventListener("click",resetgame)

