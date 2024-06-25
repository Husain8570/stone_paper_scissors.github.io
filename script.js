
function getWinner(user,comp){
    if(comp==1){
        if(user=="r"){
            return "none";
        }
        else if(user=="p"){
            return "user";
        }
        else{
            return "comp";
        }
    }
    else if(comp==2){
        if(user=="r"){
            return "comp";
        }
        else if(user=="p"){
            return "none";
        }
        else{
            return "user";
        }
    }
    else{
        if(user=="r"){
            return "user";
        }
        else if(user=="p"){
            return "comp";
        }
        else{
            return "none";
        }
    }
}
let rock=document.getElementById("rock");
let paper=document.getElementById("paper");
let scissor=document.getElementById("scissor");
let res=document.getElementById("result");
let cont=document.getElementsByClassName("container")[0];
const fun=(e)=>{
    cont.removeEventListener("click",fun);
    let select=e.target.id;
        document.getElementById(select).style.border="5px solid white"
        if(e.target.id=="rock"){
            user="r";
        }
        else if(e.target.id=="paper"){
            user="p";
        }
        else{
            user="s";
        }
        let rand=Math.floor(Math.random()*(3))+1;
        let winner=getWinner(user,rand);
        let computer=document.getElementById("comp");
        
    if(rand==1){
        computer.style.backgroundImage=`url("image/rock.png")`;
        computer.style.backgroundRepeat="no-repeat";
        computer.style.backgroundSize="150px 200px";
    }
    else if(rand==2){
        computer.style.backgroundImage=`url("image/paper.png")`;
        computer.style.backgroundRepeat="no-repeat";
        computer.style.backgroundSize="150px 200px";

    }
    else{
        computer.style.backgroundImage=`url("image/scissor.png")`;
        computer.style.backgroundRepeat="no-repeat";
        computer.style.backgroundSize="150px 200px";
    }
    if(winner=="none"){
        res.innerHTML="<b>Draw</b>"
    }
    else if(winner=="comp"){
        res.innerHTML="<b>You lose</b>"
    }
    else{
        res.innerHTML="<b>You won</b>"
        let audio= new Audio("winner.wav");
        audio.play();
        
    }
    endgame();
}
function playgame(){
    let user;
    cont.addEventListener("click",fun);
}

playgame();

function endgame(){
    let button=document.getElementById("playmore");
    button.innerHTML="Play again";
    button.addEventListener("click",()=>{
        res.innerHTML="";
        rock.style.border="2px solid black"
        paper.style.border="2px solid black"
        scissor.style.border="2px solid black"
        document.getElementById("comp").style.backgroundImage="none";
        button.innerHTML="";
        playgame();
    })
}
