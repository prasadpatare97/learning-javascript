const incBtn=document.getElementById("increment");
const decBtn=document.getElementById("decrement");
const resetBtn=document.getElementById("reset");
const heading=document.getElementById("head");

let count=0;
incBtn.addEventListener("click", ()=>{
    count+=1;
    heading.textContent=count;
    heading.style.color=color(count);
})
decBtn.addEventListener("click", ()=>{
    count-=1;
    heading.textContent=count;
    heading.style.color=color(count);
})
resetBtn.addEventListener("click", ()=>{
    count=0;
    heading.textContent=count;
    heading.style.color=color(count);
})
function color(count){
    switch(true){
        case count>0:
            return "green";
            break;
        case count<0:
            return "red";
            break;
        case count==0:
            return "black"
            break;
    }
}