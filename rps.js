let user=0;
let comp=0;
let userresult=document.querySelector("#score-u");
let compresult=document.querySelector("#score-c");
let result=document.querySelector('.show-result');

const choicelist=document.querySelectorAll(".choice");

const showresult=(userwin,userchoice,compchoice)=>{
    if(userwin){
        result.innerText=`You Win! Your ${userchoice} beats ${compchoice}`;
        user++;
        userresult.innerText=user;
        result.style.backgroundColor="green";
    }
    else{
        result.innerText=`You lose! ${compchoice} beats your ${userchoice}`;
        comp++;
        compresult.innerText=comp;
        result.style.backgroundColor="red";
    }
}
const playgame=(userchoice,compchoice)=>{
    if(userchoice===compchoice){
         result.innerText="Draw Game.Play Again";
         result.style.backgroundColor="grey";
    }
    else{
        let userwin=true;
        if(userchoice==="rock"){
            //paper,scissors
            userwin=  compchoice==="paper"?false : true;
        }
        else if(userchoice==="paper"){
            //rock,scissors
            userwin= compchoice==="scissors"? false:true; 
        }
        else{
            userwin= compchoice==="rock"?false : true;
        }
        showresult(userwin,userchoice,compchoice);
    }
}

const compval=()=>{
    let lists=["rock","paper","scissors"];
    let idx=Math.floor(Math.random()*3);
    return lists[idx];
}
choicelist.forEach((ele)=>{
    ele.addEventListener("click",()=>{
        const userchoice=ele.getAttribute("id");
        const compchoice=compval();
        playgame(userchoice,compchoice);
    })
})