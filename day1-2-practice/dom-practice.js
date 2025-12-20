//Exercise1
const myBtn=document.querySelector("#myBtn");
const myPara=document.querySelector("#myPara");
const myInput=document.querySelector("#myInput");
const myDiv=document.querySelector("#myDiv");
const myLabel=document.querySelector("#myLabel");
const increaseBtn=document.querySelector("#increaseBtn");
const decreaseBtn=document.querySelector("#decreaseBtn");
myBtn.addEventListener("click",()=>{
    myPara.innerHTML="Text changed successfully!"
});
//Exercise2
myInput.addEventListener("input", ()=>{
    myDiv.innerHTML=myInput.value;
})

//Exercise3
let num=0;
increaseBtn.addEventListener("click",()=>{
    num+=1;
    myLabel.innerHTML=num;
})
decreaseBtn.addEventListener("click",()=>{
    num-=1;
    myLabel.innerHTML=num;
})


