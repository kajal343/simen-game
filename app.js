
let gamese=[];
let userse=[];
let color=["box1","box2","box3","box4"]
let started=false
let level=0
let h2=document.querySelector("h2")
let h3=document.querySelector("h3")
let hs=0
h3.innerText=`Highest score: ${hs}`
document.addEventListener("keypress",function(){
    if(started===false){
        console.log("Game started")
        started=true
        levelup()
    }
})
function btnflash(btn){
    btn.classList.add("flash")
    setTimeout(function(){
        btn.classList.remove("flash")
    },150)
}
function levelup(){
    userse=[];
    level++;
    h2.innerText=`Level ${level}`
    let randind=Math.floor(Math.random()*4);
    let randcol=color[randind];
    let randbtn=document.querySelector(`.${randcol}`);
    gamese.push(randcol)
    btnflash(randbtn)
}
function checkans(ind){
    if(gamese[ind]==userse[ind]){
        if(userse.length==gamese.length){
            setTimeout(levelup, 800);
        }
    }else{
        if(hs<level){
            hs=level
            h3.innerText=`Highest score: ${hs}`
        }
        h2.innerText=`Game over! Your score: ${level} Please press any key to start again`
        document.querySelector("body").style.backgroundColor="red"
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white"
        },150);
        reset();
    }
}
function reset(){
    started=false
    gamese=[]
    userse=[]
    level=0
}
function btnpress(){
    let btn=this;
    btnflash(btn);
    let usercol=btn.getAttribute("id")
    userse.push(usercol)
    checkans(userse.length-1);
}
let allbtn=document.querySelectorAll(".btn")
for(btn of allbtn){
    btn.addEventListener("click",btnpress)
}
